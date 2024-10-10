import { DashboardDto } from '@/app/api/dashboard/route'
import { fetchDataFromApi } from '@/utils/fetchDataFromApi'
import { getSession } from '@/app/api/auth/[...nextauth]/authOptions'

// TODO: add <DataFetcher example={example} />
export default async function DashboardPage() {
  const data = await fetchDataFromApi<DashboardDto>('api/dashboard')
  const { example } = data

  const session = await getSession()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Dashboard Page</h1>
      <p className="text-xl">
        User email: {session?.user.email} ({session?.user.id})
      </p>
    </div>
  )
}
