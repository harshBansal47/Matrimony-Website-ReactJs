import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../images/blog.jpg"; // Replace with correct path to your placeholder image
import { FaPlus } from "react-icons/fa";

interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

const initialFormData: Blog = {
  slug: "",
  title: "",
  excerpt: "",
  image: "",
  content: ""
};

const BlogList: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<Blog>(initialFormData);

  const blogData: Blog[] = [
    {
      slug: "exploring-ai-in-modern-matchmaking",
      title: "Exploring AI in Modern Matchmaking",
      excerpt:
        "Discover how AI is revolutionizing the matchmaking industry by providing personalized and accurate partner suggestions.",
      image: "/images/blog1.jpg",
      content: `
        <p>Artificial Intelligence (AI) has significantly impacted various industries, and matchmaking is no exception. By leveraging AI technologies, modern matchmaking platforms can provide more personalized and accurate partner suggestions to users.</p>
        <p>In this blog post, we'll explore how AI works in matchmaking, the benefits it offers, and the potential challenges that come with it.</p>
        <h2>How AI Works in Matchmaking</h2>
        <p>AI algorithms analyze user data, preferences, and behavior to find compatible matches. This process involves collecting vast amounts of data, including user profiles, interests, and previous interactions.</p>
        <h2>Benefits of AI in Matchmaking</h2>
        <ul>
          <li><strong>Personalization:</strong> AI can provide highly personalized partner suggestions based on individual preferences and behavior.</li>
          <li><strong>Efficiency:</strong> AI algorithms can quickly process and analyze data, making the matchmaking process faster and more efficient.</li>
          <li><strong>Accuracy:</strong> By learning from user data, AI can improve the accuracy of match suggestions over time.</li>
        </ul>
        <h2>Challenges of AI in Matchmaking</h2>
        <p>Despite the benefits, AI in matchmaking also presents some challenges, including data privacy concerns and the potential for algorithmic bias.</p>
        <p>Overall, AI has the potential to transform the matchmaking industry, offering users a more personalized and efficient experience.</p>
      `
    },
    {
      slug: "the-future-of-ai-in-dating-apps",
      title: "The Future of AI in Dating Apps",
      excerpt:
        "AI is shaping the future of dating apps by enhancing user experiences and providing smarter matchmaking solutions.",
      image: "/images/blog2.jpg",
      content: `
        <p>As technology continues to evolve, AI is playing an increasingly important role in the development of dating apps. From improving user experiences to providing smarter matchmaking solutions, AI is shaping the future of online dating.</p>
        <p>In this blog post, we will delve into the future of AI in dating apps, highlighting the key trends and innovations to watch out for.</p>
        <h2>Key Trends in AI for Dating Apps</h2>
        <p>Several trends are emerging in the use of AI for dating apps, including:</p>
        <ul>
          <li><strong>Enhanced Personalization:</strong> AI can provide more personalized match suggestions by analyzing user data and preferences.</li>
          <li><strong>Voice and Video Recognition:</strong> AI technologies are being used to improve voice and video recognition features, making virtual dates more seamless and enjoyable.</li>
          <li><strong>Behavioral Analysis:</strong> AI can analyze user behavior to identify patterns and preferences, helping to refine match suggestions.</li>
        </ul>
        <h2>Innovations in AI for Dating Apps</h2>
        <p>AI innovations are driving the development of new features and functionalities in dating apps, such as:</p>
        <ul>
          <li><strong>Chatbots:</strong> AI-powered chatbots can facilitate conversations between users, providing icebreakers and conversation starters.</li>
          <li><strong>Security Enhancements:</strong> AI is being used to enhance security features, such as detecting fake profiles and fraudulent activities.</li>
          <li><strong>Emotional Intelligence:</strong> AI algorithms are being developed to understand and respond to users' emotional states, providing a more empathetic and supportive experience.</li>
        </ul>
        <p>The future of AI in dating apps is promising, with the potential to revolutionize the way people connect and find love online.</p>
      `
    },
    {
      slug: "how-to-create-the-perfect-online-dating-profile",
      title: "How to Create the Perfect Online Dating Profile",
      excerpt:
        "Creating a compelling online dating profile is key to finding the right match. Learn how to craft a profile that stands out.",
      image: "/images/blog3.jpg",
      content: `
        <p>Your online dating profile is your chance to make a great first impression. It's important to create a profile that accurately reflects who you are and what you're looking for in a partner.</p>
        <p>In this blog post, we'll provide tips and strategies for creating the perfect online dating profile.</p>
        <h2>1. Choose the Right Photos</h2>
        <p>Photos are the first thing people notice on your profile, so choose high-quality images that showcase your personality. Include a mix of solo shots, candid photos, and pictures of you doing activities you enjoy.</p>
        <h2>2. Write a Compelling Bio</h2>
        <p>Your bio should be a brief summary of who you are, what you value, and what you're looking for in a partner. Be honest and genuine, and don't be afraid to show a bit of your personality.</p>
        <h2>3. Highlight Your Interests and Hobbies</h2>
        <p>Share your interests and hobbies to give potential matches a sense of what you enjoy doing in your free time. This can help you find common ground with others.</p>
        <h2>4. Be Positive and Upbeat</h2>
        <p>Keep your profile positive and upbeat. Focus on what you want and what makes you happy, rather than what you don't want.</p>
        <h2>5. Update Your Profile Regularly</h2>
        <p>Regularly updating your profile keeps it fresh and shows that you're active on the platform. Add new photos and update your bio as needed.</p>
        <p>By following these tips, you can create an online dating profile that stands out and attracts the right matches.</p>
      `
    }
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Replace with your API endpoint
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Reset form data and close the modal
      setFormData(initialFormData);
      setModalOpen(false);
      // Optionally, refresh the blog list or handle the newly created blog
    } else {
      // Handle error
      console.error('Failed to submit blog');
    }
  };

  return (
    <div className="container mx-auto pt-28 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Our Blogs</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
          onClick={() => setModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Create Blog
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={placeholderImage}
              alt={blog.title}
              className="rounded-t-lg object-cover"
              width={600}
              height={400}
            />
            <div className="mt-4">
              <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
              <p className="text-gray-600 mt-2">{blog.excerpt}</p>
              <Link to={`/blogs/${blog.slug}`} className="text-blue-500 hover:underline mt-4 block">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-40">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Slug</label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
