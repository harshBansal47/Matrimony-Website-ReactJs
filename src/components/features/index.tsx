import tabBg from '../../images/tab-bg.jpg';
import AiMatches from '../../images/screenshots/ai-matches.jpeg';
import PersonalizedPreferences from '../../images/screenshots/v.jpeg';
import Astro from '../../images/screenshots/astro.jpeg';
import Seamless from '../../images/screenshots/seamless.jpeg';


const comp1 = ()=>{
    return(
        <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

        {/* Tablet-like Box */}
        <div className="relative w-8/12 bg-white h-[570px] bg-opacity-90 shadow-xl rounded-xl flex flex-row justify-between items-center p-10"
          style={{
            backgroundImage: `url('${tabBg}')`, // Add your image path here
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>

          {/* Left Side: Text Section */}
          <div className="relative z-10 w-1/2 text-left p-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
              {/* Icon */}
              <span className="mr-3">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </span>
              Automatic AI-Powered Matching
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Matches optimized for compatibility with the power of artificial intelligence, bringing you closer to your ideal partner.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Customizable preferences</li>
              {/* <li>Seamless integration with astrology</li>
      <li>Exclusive to the Maheshwari community</li> */}
            </ul>
          </div>

          {/* Right Side: Image Section */}
          <div className="relative w-1/2 flex justify-evenly">
            <img
              src={AiMatches}
              alt="AI Matching"
              className=" h-[500px] w-auto rounded-lg shadow-lg z-20 overflow-hidden"
            />
          </div>
        </div>
      </div>
    )
}

const comp2 = ()=>{
    return(
        <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

          {/* Tablet-like Box */}
          <div className="relative w-8/12 bg-white h-[570px] bg-opacity-90 shadow-xl rounded-xl flex flex-row justify-between items-center p-10"
            style={{
              backgroundImage: `url('${tabBg}')`, // Add your image path here
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>

            {/* Left Side: Text Section */}
            <div className="relative z-10 w-1/2 text-left p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">
                  <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
                  </svg>
                </span>
                Astrology Integration
              </h1>
              <p className="text-lg text-gray-700 mb-4">
               Automatic Astrology Information Matching for personalized astrological insights.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Accurate astrological predictions</li>
                <li>AI-based Astrology Gunn Matching</li>
                <li>Get Rid of Manual Matching</li>
              </ul>
            </div>
            {/* Right Side: Image Section */}
            <div className="relative w-1/2 flex justify-evenly">
              <img
                src={Astro}
                alt="AI Matching"
                className=" h-[500px] w-auto rounded-lg shadow-lg z-20 overflow-hidden"
              />
            </div>
          </div>
        </div>)
}



const comp3 = ()=>{
    return(
        
        <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

          {/* Tablet-like Box */}
          <div className="relative w-8/12 bg-white h-[570px] bg-opacity-90 shadow-xl rounded-xl flex flex-row justify-between items-center p-10"
            style={{
              backgroundImage: `url('${tabBg}')`, // Add your image path here
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>

            {/* Left Side: Text Section */}
            <div className="relative z-10 w-1/2 text-left p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">
                  <svg className="w-8 h-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l7 7-7 7-7-7z" />
                  </svg>
                </span>
                Exclusive to Maheshwari Community
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Find your ideal match within a niche, like-minded Maheshwari group.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Focused on community values</li>
                <li>Exclusive network of profiles</li>
              </ul>
            </div>


            {/* Right Side: Image Section */}
            <div className="relative w-1/2 flex justify-evenly">
              <img
                src={AiMatches}
                alt="AI Matching"
                className=" h-[500px] w-auto rounded-lg shadow-lg z-20 overflow-hidden"
              />
            </div>
          </div>
        </div>
    )
}


const comp4 = ()=>{
    return(
        
        <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

          {/* Tablet-like Box */}
          <div className="relative w-8/12 bg-white h-[570px] bg-opacity-90 shadow-xl rounded-xl flex flex-row justify-between items-center p-10"
            style={{
              backgroundImage: `url('${tabBg}')`, // Add your image path here
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>

            {/* Left Side: Text Section */}
            <div className="relative z-10 w-1/2 text-left p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">
                  <svg className="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z" />
                  </svg>
                </span>
                Personalized Preferences
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Customize your match preferences based on hobbies, interests, and more.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Filter by lifestyle choices</li>
                <li>Tailor matches to your preferences</li>
              </ul>
            </div>

            {/* Right Side: Image Section */}
            <div className="relative w-1/2 flex justify-evenly">
              <img
                src={PersonalizedPreferences}
                alt="AI Matching"
                className=" h-[500px] w-auto rounded-lg shadow-lg z-20 overflow-hidden"
              />
            </div>
          </div>
        </div>

    )
}


const comp5 = ()=>{
    return(
        
        <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 relative">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>

          {/* Tablet-like Box */}
          <div className="relative w-8/12 bg-white h-[570px] bg-opacity-90 shadow-xl rounded-xl flex flex-row justify-between items-center p-10"
            style={{
              backgroundImage: `url('${tabBg}')`, // Add your image path here
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-texture bg-no-repeat bg-cover opacity-20"></div>

            {/* Left Side: Text Section */}
            <div className="relative z-10 w-1/2 text-left p-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-3">
                  <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Seamless User Experience
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                Intuitive, easy-to-use interface with guided match suggestions for a smooth journey.
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>User-friendly design</li>
                <li>Quick, guided match suggestions</li>
              </ul>
            </div>

            {/* Right Side: Image Section */}
            <div className="relative w-1/2 flex justify-evenly">
              <img
                src={Seamless}
                alt="AI Matching"
                className=" h-[500px] w-auto rounded-lg shadow-lg z-20 overflow-hidden"
              />
            </div>
          </div>
        </div>
    )
}


const SiteFeatures = [
    {
        id:1,
        Component:comp1
    },
    {
        id:2,
        Component:comp2
    },
    {
        id:3,
        Component:comp3
    },
    {
        id:4,
        Component:comp4
    },
    {
        id:5,
        Component:comp5
    }
]

export default SiteFeatures;