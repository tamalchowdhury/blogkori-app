import { revalidatePath } from "next/cache"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    
    if (!body.post_permalink) {
      return new Response('Missing post_permalink', { status: 400 })
    }
    
    const path = body.post_permalink.split('/').pop()
    console.log('webhook received - body:', JSON.stringify(body, null, 2));

    revalidatePath(`/${path}`)
    return new Response('OK')
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 })
  }
}