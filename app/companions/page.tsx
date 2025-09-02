import CompanionCard from "@/components/CompanionCard";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllComapnions } from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = Array.isArray(filters.subject) ? filters.subject[0] : (filters.subject || '');
  const topic = Array.isArray(filters.topic) ? filters.topic[0] : (filters.topic || '');

  const companions = await getAllComapnions({ subject, topic });

  return (
     <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
               
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard 
              key={companion.id}
              {...companion} 
              color={getSubjectColor(companion.subject)} />

        ))}
      </section>
     </main>
  )
}

export default CompanionsLibrary
