import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllComapnions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'

const Page = async () => {
  const companions = await getAllComapnions({ limit: 3});
  const recentSessionsCompanions = await getRecentSessions( 10);


  return (
    <main>
      <h1>Popular Companions</h1>
      
      <section className='home-section'>
        {companions.map((companion) => (
            <CompanionCard 
            {...companion }
              key={getSubjectColor(companion.subject)}
            />
      ))}
      

      </section>

      <section className='home-section'>
        <CompanionsList 
            title="Recently completed sessions"
            companions={recentSessionsCompanions}
            classNames='w-2/3 max-lg:w-full'
            />
        <Cta />

      </section>

    </main>
  )
}

export default Page