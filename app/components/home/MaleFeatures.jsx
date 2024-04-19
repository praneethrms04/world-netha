import getAllProfies from "@/app/lib/getAllProfiles"
import FeatureCard from "../common/FeatureCard"

const MaleProfiles = async () => {
   const profilesData = getAllProfies()
   const profiles = await profilesData
   const malecontent = (
      <section className='mx-auto max-w-screen-2xl' >
         <div>
            <h3 className=' font-serif mx-auto ms-10 my-4 text-[#726300]'>Male Featured</h3>
         </div>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3'>
            {
               profiles && profiles.filter((profile) => profile.gender === "Male").slice(0, 5).map((profileData, index) => {
                  return <div className='flex ms-10 '> <FeatureCard key={index} profileData={profileData} /> </div>
               })
            }
         </div>
      </section>
   )
   return malecontent

}
export default MaleProfiles