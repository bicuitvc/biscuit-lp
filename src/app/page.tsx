import Header from "@/components/Header/Header";
import HeroForm from "@/components/Hero/HeroForm";
import PortfolioSection from "@/components/Portfolio/Portfolio";
import RecipeSection from "@/components/RecipeSection/RecipeSection";

export default function Home() {
	return (
		<>
			<div className='bg_primary'>
				<Header />
				<HeroForm />
			</div>
			<RecipeSection />
			<PortfolioSection />
		</>
	);
}
