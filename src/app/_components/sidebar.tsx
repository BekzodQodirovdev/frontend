export const Sidebar = () => {
    const categories = [
        "O‘zbekistonga yetkazish",
        "Go‘sht va Baliq",
        "Asosiy oziq-ovqatlar",
        "Tayyor oziq-ovqatlar",
        "Ichimliklar",
        "Mobil telefon va kompyuter...",
        "Go‘zallik & Sog‘liq",
        "Oilaviy do‘kon",
        "Kitoblar",
        "Shirinliklar",
    ];

    return (
        <aside className="w-64 bg-white p-4 shadow-md">
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};
