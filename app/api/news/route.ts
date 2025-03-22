import { NextResponse } from 'next/server';

interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  url: string;
}

async function fetchTrendingNews(): Promise<{ title: string; source: string; date: string; link: string }[]> {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  
  if (!apiKey) {
    console.error('NewsAPI key is missing');
    return [];
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=real+estate+funding&language=en&sortBy=publishedAt&apiKey=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`NewsAPI request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.articles) {
      throw new Error('No articles found in response');
    }
    
    return data.articles.map((article: Article) => ({
      title: article.title,
      source: article.source.name,
      date: new Date(article.publishedAt).toLocaleDateString(),
      link: article.url
    }));
    
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function GET() {
  const news = await fetchTrendingNews();
  return NextResponse.json(news);
} 