const About = () => {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold py-5 text-center text-gray-800">About Our MERN Application`s Authentication System</h1>
        <p className="text-base md:text-lg text-gray-600">Our MERN stack application features a robust and secure authentication system designed to protect user data and provide a seamless user experience. By leveraging MongoDB, Express.js, React, and Node.js, we`ve built a comprehensive solution that handles user registration, login, and session management efficiently.</p>
        <p className="text-base md:text-lg text-gray-600">Our back end, powered by Express.js, manages API endpoints for user operations, ensuring that passwords are securely hashed with bcrypt before storage in MongoDB. We use JSON Web Tokens (JWT) to maintain authentication states, providing secure token-based authentication.</p>
        <p className="text-base md:text-lg text-gray-600">Our front-end React application seamlessly integrates with these back-end services, storing tokens securely and ensuring that authenticated users can easily access protected routes. This combination of technologies and best practices ensures that our application is not only secure but also user-friendly, offering a reliable authentication experience for all users.</p>
      </div>
    </div>
  )
}

export default About