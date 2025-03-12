import { Banner } from "./_components/banner";
import { ProductList } from "./_components/grid";
import { Sidebar } from "./_components/sidebar";

export default function Home() {
    return (
        <main className="bg-[#f3f3f3]">
            <div className="container">
                <div className="flex">
                    <Sidebar />
                    <div className="flex-1 p-6">
                        <Banner />
                        <ProductList />
                    </div>
                </div>
            </div>
        </main>
    );
}
