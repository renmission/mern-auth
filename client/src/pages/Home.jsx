import mernBanner from '../assets/mern-banner.png'

const Home = () => {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold py-5 text-center text-gray-800">Implementing Authentication in a MERN Application</h1>
        <img src={mernBanner} alt="MERN stack" className="rounded-lg object-cover" />
        <p className="text-base md:text-lg text-gray-600">Authentication is a crucial part of any web application, ensuring that users can securely access their accounts and data. In a MERN (MongoDB, Express.js, React, Node.js) stack application, implementing authentication typically involves a combination of front-end and back-end techniques to handle user login, registration, and session management.</p>
      </div>
    </div>
  )
}

export default Home