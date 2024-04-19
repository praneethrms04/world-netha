'use client'
import { CallToAction, HeroSection, SuccessMatches } from "./components/home";

import FeatureCard from "./components/common/FeatureCard";
import { get, getDatabase, ref } from "firebase/database";
import { Suspense, useEffect, useState } from "react";

import getAllProfies from "@/app/lib/getAllProfiles"
import { FeatureCardLoader } from "./utils/loaders";



export default function Home() {

  const [maleProfiles, setMaleProfiles] = useState([]);
  const [femaleProfiles, setFemaleProfiles] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetchMaleProfiles();
    fetchFemaleProfiles();

  }, []);

  const fetchMaleProfiles = async () => {
    setLoading(true)
    try {
      const profilesData = await getAllProfies();
      const maleProfilesData = profilesData.filter(
        (profile) => profile.gender === "Male"
      ).slice(0, 4);
      setMaleProfiles(maleProfilesData);
      setLoading(false)

    } catch (error) {
      console.error("Error fetching male profiles:", error);
    }
  };

  const fetchFemaleProfiles = async () => {
    try {
      const profilesData = await getAllProfies();
      const femaleProfilesData = profilesData.filter(
        (profile) => profile.gender === "Female"
      ).slice(0, 4);
      console.log(femaleProfilesData)
      setFemaleProfiles(femaleProfilesData);
    } catch (error) {
      console.error("Error fetching female profiles:", error);
    }
  };
  return (
    <Suspense fallback={<div> Loading...</div>} >
      <main className=" font-sans " >
        <div>
          <div className="relative">
            <HeroSection />
          </div>
        </div>
        <div>
          <section className='mx-auto max-w-screen-2xl' >
            <div>
              <h3 className=' font-serif mx-auto ms-10 my-4 text-[#726300]'>Male Featured</h3>
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3'>
              {
                loading ? [1, 2, 3, 4].map((_, ind) => <div className="flex ms-10"><FeatureCardLoader key={ind} /></div>) : (
                  <>
                    {
                      maleProfiles && maleProfiles.filter((profile) => profile.gender === "Male").slice(0, 5).map((profileData, index) => {
                        return <div className='flex ms-10 '> <FeatureCard key={index} profileData={profileData} /> </div>
                      })
                    }
                  </>
                )
              }
            </div>
          </section>
        </div>
        <div>
          <section className='mx-auto max-w-screen-2xl' >
            <div>
              <h3 className=' font-serif mx-auto ms-10 my-4 text-[#726300]'>Female Featured</h3>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-3'>
              {
                loading ? [1, 2, 3, 4].map((_, ind) => <div className="flex ms-10"><FeatureCardLoader key={ind} /></div>) : (
                  <>
                    {
                      femaleProfiles && femaleProfiles.filter((profile) => profile.gender === "Female").slice(0, 5).map((profileData, index) => {
                        return <div className='flex ms-10 '> <FeatureCard key={index} profileData={profileData} /> </div>
                      })
                    }
                  </>
                )
              }

            </div>
          </section>

        </div>
        <div>
          <CallToAction />
        </div>
        <div>
          <SuccessMatches />
        </div>
      </main>
    </Suspense>
  );
}
