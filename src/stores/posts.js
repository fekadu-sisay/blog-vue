import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts-store", {
  // Data
  state() {
    return {
      posts: [
        {
          id: 1,
          title: "The Rise of Remote Work: Navigating the New Normal",
          body: "The COVID-19 pandemic has fundamentally changed the way we work, with a significant shift towards remote and hybrid work models. This post explores the challenges and opportunities of this transition, and provides insights on how companies and employees can adapt to the new normal.",
          date: "2022-03-15",
          author: "Jane Smith",
          created_at: "2022-03-15",
          is_saved: false,
        },
        {
          id: 2,
          title: "Sustainable Fashion: Trends and Innovations",
          body: "The fashion industry has been under increasing pressure to become more sustainable. This post discusses the latest trends and innovations in sustainable fashion, including the use of eco-friendly materials, circular business models, and efforts to reduce waste and emissions.",
          date: "2021-09-20",
          author: "Michael Johnson",
          created_at: "2021-09-20",
          is_saved: true,
        },
        {
          id: 3,
          title: "The Future of Artificial Intelligence: Promises and Perils",
          body: "As AI technology continues to advance, it is important to understand both the potential benefits and the risks associated with its development. This post explores the latest AI breakthroughs, their applications, and the ethical considerations that must be addressed to ensure the responsible use of this powerful technology.",
          date: "2023-01-05",
          author: "Sarah Lee",
          created_at: "2023-01-05",
          is_saved: false,
        },
        {
          id: 4,
          title: "Navigating the Post-Pandemic Travel Landscape",
          body: "The travel industry has been one of the hardest hit by the COVID-19 pandemic. This post examines the changes and challenges facing the industry, including new health and safety protocols, the rise of domestic travel, and the evolving preferences of travelers in the post-pandemic world.",
          date: "2022-06-01",
          author: "David Chen",
          created_at: "2022-06-01",
          is_saved: true,
        },
        {
          id: 5,
          title: "The Intersection of Mental Health and Technology",
          body: "The pandemic has brought mental health to the forefront of public discourse. This post explores how technology, from telehealth services to mental health apps, is being leveraged to improve access to and delivery of mental health support.",
          date: "2023-04-20",
          author: "Emily Thompson",
          created_at: "2023-04-20",
          is_saved: false,
        },
        {
          id: 6,
          title: "The Rise of Plant-Based Diets: Trends and Impacts",
          body: "The growing popularity of plant-based diets has had significant impacts on the food industry, agriculture, and the environment. This post examines the factors driving this trend, the nutritional and environmental benefits of plant-based eating, and the challenges faced by the industry in meeting consumer demand.",
          date: "2022-11-10",
          author: "Mark Gomez",
          created_at: "2022-11-10",
          is_saved: true,
        },
        {
          id: 7,
          title: "The Future of Mobility: Electric Vehicles and Beyond",
          body: "The transportation sector is undergoing a major transformation, with the rapid adoption of electric vehicles and the emergence of new mobility solutions. This post explores the latest developments in the EV market, the infrastructure challenges, and the broader implications for the future of transportation.",
          date: "2023-07-01",
          author: "Lisa Nguyen",
          created_at: "2023-07-01",
          is_saved: false,
        },
        {
          id: 8,
          title: "The Rise of Esports: Opportunities and Challenges",
          body: "Esports, or competitive video gaming, has become a rapidly growing industry with a global audience. This post examines the factors driving the rise of esports, the potential career paths for players, and the challenges faced by the industry in terms of governance, monetization, and fan engagement.",
          date: "2022-09-30",
          author: "David Lee",
          created_at: "2022-09-30",
          is_saved: true,
        },
        {
          id: 9,
          title: "The Impact of Blockchain Technology on Finance and Beyond",
          body: "Blockchain technology has the potential to disrupt a wide range of industries, from finance to supply chain management. This post explores the key features of blockchain, its current applications, and the opportunities and challenges it presents for businesses and consumers.",
          date: "2023-02-15",
          author: "Sophia Fernandez",
          created_at: "2023-02-15",
          is_saved: false,
        },
        {
          id: 10,
          title:
            "The Future of Healthcare: Innovations in Telemedicine and Digital Health",
          body: "The COVID-19 pandemic has accelerated the adoption of telemedicine and digital health solutions. This post examines the latest advancements in these areas, including the use of AI and machine learning, the integration of wearable devices, and the implications for patient care and the healthcare industry.",
          date: "2023-06-01",
          author: "Michael Chen",
          created_at: "2023-06-01",
          is_saved: true,
        },
      ],
    };
  },
  // computed
  getters: {
    sorted() {
      return this.posts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    },
    // sorted: (state) =>
    //   state.posts.sort(
    //     (a, b) => new Date(b.created_at) - new Date(a.created_at),
    //   ),
  },
  // methods
  actions: {
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
        author: "Don John",
        created_at: new Date().toLocaleDateString(),
        is_saved: false,
      });
    },
    deletePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    savePost(id) {
      const post = this.posts.find((post) => post.id === id);
      post.is_saved = !post.is_saved;
    },
  },
});
