export default function UyaliAloqa() {
    const services = [
        { id: 1, name: "Ucell", logo: "/ucell.png" },
        { id: 2, name: "Beeline", logo: "/beeline.png" },
        { id: 3, name: "Mobiuz", logo: "/mobiuz.png" },
        { id: 4, name: "Uztelecom", logo: "/uztelecom.png" },
        { id: 5, name: "Ucell", logo: "/ucell.png" },
        { id: 6, name: "Beeline", logo: "/beeline.png" },
        { id: 7, name: "Mobiuz", logo: "/mobiuz.png" },
        { id: 8, name: "Uztelecom", logo: "/uztelecom.png" },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold">To’lov xizmatlari</h2>
            <p className="mb-4">Uyali aloqa</p>
            <div className="grid grid-cols-4 gap-y-[40px]">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="w-[170px] h-[155px] bg-gray-50 rounded-lg shadow-md flex flex-col items-center"
                    >
                        <img src={service.logo} alt={service.name} />
                    </div>
                ))}
            </div>
        </div>
    );
}
