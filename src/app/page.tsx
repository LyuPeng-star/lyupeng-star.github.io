import { 
  getBioData, 
  getResearchData, 
  getPublications, 
  getTeaching,
  getSeminars,
  getExperience 
} from '@/lib/markdown';
import ClientPage from '@/components/ClientPage';

export default async function HomePage() {
  try {
    const [bio, research, publications, teaching, seminars, experience] = await Promise.all([
      getBioData(),
      getResearchData(), 
      getPublications(),
      getTeaching(),
      getSeminars(),
      getExperience()
    ]);

    return (
      <ClientPage 
        bio={bio}
        research={research}
        publications={publications}
        teaching={teaching}
        seminars={seminars}
        experience={experience}
      />
    );
  } catch (error) {
    console.error('Error loading page data:', error);
    return <div>Loading...</div>;
  }
}