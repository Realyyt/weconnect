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
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        '"real estate financing" OR "investment property loans" OR "technology-powered lending" OR "fast funding solutions" OR "streamlined investment process"'
      )}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`NewsAPI request failed with status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.articles) {
      throw new Error('No articles found in response');
    }
    
    // Filter articles to ensure they're relevant to our specific focus
    const relevantArticles = data.articles.filter((article: Article) => 
      article.title.toLowerCase().includes('financing') ||
      article.title.toLowerCase().includes('funding') ||
      article.title.toLowerCase().includes('investment') ||
      article.title.toLowerCase().includes('technology') ||
      article.title.toLowerCase().includes('streamlined')
    );
    
    return relevantArticles.map((article: Article) => ({
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