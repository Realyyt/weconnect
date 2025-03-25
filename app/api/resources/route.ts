import { NextResponse } from 'next/server';

interface Resource {
  type: 'video' | 'book';
  title: string;
  source: string;
  link: string;
  description?: string;
}

interface YouTubeItem {
  id: {
    videoId: string;
  };
  snippet: {
    title?: string;
    channelTitle?: string;
    description?: string;
  };
}

interface YouTubeResponse {
  items?: YouTubeItem[];
}

interface GoogleBooksItem {
  volumeInfo: {
    title: string;
    publisher?: string;
    infoLink: string;
    description?: string;
  };
  searchInfo?: {
    textSnippet?: string;
  };
}

interface GoogleBooksResponse {
  items?: GoogleBooksItem[];
}

async function fetchYouTubeVideos(): Promise<Resource[]> {
  const apiKey = process.env.YOUTUBE_API_KEY; 
  if (!apiKey) {
    console.error('YouTube API key missing');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
        'real estate financing education'
      )}&maxResults=5&key=${apiKey}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('YouTube API Error:', errorData.error);
      return [];
    }

    const data: YouTubeResponse = await response.json();
    
    return data.items?.filter((item: YouTubeItem) => item.id?.videoId).map((item: YouTubeItem) => ({
      type: 'video',
      title: item.snippet?.title || 'Untitled Video',
      source: item.snippet?.channelTitle || 'YouTube Channel',
      link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      description: item.snippet?.description
    })) || [];

  } catch (error) {
    console.error('YouTube fetch error:', error);
    return [];
  }
}

async function fetchGoogleBooks(): Promise<Resource[]> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
  if (!apiKey) {
    console.error('Google Books API key missing');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        'real estate financing'
      )}&maxResults=5&printType=books&key=${apiKey}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google Books Error:', errorData.error);
      return [];
    }

    const data: GoogleBooksResponse = await response.json();
    
    return data.items?.filter((item: GoogleBooksItem) => (
      item.volumeInfo?.title &&
      item.volumeInfo?.infoLink
    )).map((item: GoogleBooksItem) => ({
      type: 'book',
      title: item.volumeInfo.title,
      source: item.volumeInfo.publisher || 'Unknown Publisher',
      link: item.volumeInfo.infoLink,
      description: item.volumeInfo.description?.substring(0, 200) + '...' || item.searchInfo?.textSnippet
    })) || [];

  } catch (error) {
    console.error('Google Books fetch error:', error);
    return [];
  }
}

export async function GET() {
  try {
    const [videos, books] = await Promise.all([
      fetchYouTubeVideos(),
      fetchGoogleBooks()
    ]);
    
    return new NextResponse(JSON.stringify({
      success: true,
      data: [...videos, ...books]
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=1800'
      }
    });
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to load educational resources';
    return new NextResponse(JSON.stringify({
      success: false,
      error: errorMessage
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}