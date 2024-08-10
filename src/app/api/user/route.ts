import { NextResponse, type NextRequest } from 'next/server'

import { createClient } from '@/utils/supabase/server'

/* EXAMPLE ROUTE / FOLDER - USE THIS AS TEMPLATE */

export async function GET(request: NextRequest) {
  const supabase = createClient()

  const { data: todos } = await supabase.from('todo').select('*')

  return NextResponse.json(todos)
}
