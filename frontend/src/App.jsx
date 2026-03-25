import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JournalSection from "./components/JournalSection";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import SiteFooter from "./components/SiteFooter";
import SkillsSection from "./components/SkillsSection";
import {
  defaultSkills,
  journalPosts,
  navLinks,
  portfolioItems,
  services,
} from "./data/siteData";

export default function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formFeedback, setFormFeedback] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [skills, setSkills] = useState(defaultSkills);
  const [isLoadingSkills, setIsLoadingSkills] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    const sections = document.querySelectorAll("main section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const serviceGrid = document.querySelector(".service-grid");
    if (!serviceGrid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const serviceCards = entry.target.querySelectorAll(".service-grid > div");
            serviceCards.forEach((card) => {
              card.classList.add("service-animate");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(serviceGrid);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchGitHubLanguages() {
      try {
        const reposRes = await fetch(
          "https://api.github.com/users/Vihangasachintha/repos?per_page=100",
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repos");
        const repos = await reposRes.json();

        const langTotals = {};
        await Promise.all(
          repos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url);
            if (!langRes.ok) return;
            const langs = await langRes.json();
            Object.entries(langs).forEach(([lang, bytes]) => {
              langTotals[lang] = (langTotals[lang] || 0) + bytes;
            });
          }),
        );

        const totalBytes = Object.values(langTotals).reduce(
          (sum, b) => sum + b,
          0,
        );
        if (totalBytes === 0) return;

        const sorted = Object.entries(langTotals)
          .map(([label, bytes]) => ({ label, bytes }))
          .sort((a, b) => b.bytes - a.bytes)
          .slice(0, 8);

        const topTotalBytes = sorted.reduce((sum, entry) => sum + entry.bytes, 0);
        if (topTotalBytes === 0) return;

        const topSkills = sorted
          .map(({ label, bytes }) => ({
            label,
            percentage: parseFloat(((bytes / topTotalBytes) * 100).toFixed(2)),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 8);

        setSkills(topSkills);
      } catch {
        // keep defaultSkills already set in state
      } finally {
        setIsLoadingSkills(false);
      }
    }
    fetchGitHubLanguages();
  }, []);

  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((previous) => ({ ...previous, [name]: value }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setFormFeedback(null);

    try {
      await emailjs.send(
        "service_6c39nng",
        "template_ghmu7tw",
        formState,
        "PD-AawnHSnOh8kn1p",
      );
      setFormFeedback({
        type: "success",
        message: "Email sent successfully!",
      });
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setFormFeedback({ type: "error", message: "Failed to send email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="leading-relaxed">
      <Header
        navLinks={navLinks}
        activeSection={activeSection}
        isHeaderScrolled={isHeaderScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={() => setIsMobileMenuOpen((previous) => !previous)}
        onNavClick={handleNavClick}
      />

      <main>
        <HeroSection />
        <PortfolioSection items={portfolioItems} />
        <AboutSection />
        <ServicesSection services={services} />
        <SkillsSection skills={skills} isLoadingSkills={isLoadingSkills} />
        <JournalSection posts={journalPosts} />
        <ContactSection
          formState={formState}
          formFeedback={formFeedback}
          isSubmitting={isSubmitting}
          onChange={handleFormChange}
          onSubmit={handleContactSubmit}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
