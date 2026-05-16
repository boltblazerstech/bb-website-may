export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-10">
            <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} BoltBlazers Engineering. All rights reserved.</p>
            </div>
        </footer>
    );
}
