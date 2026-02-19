import { motion } from "motion/react"

const Navigation = () => {
    return (
        <motion.nav
        className="bg-white/5 backdrop-blur-md z-10 border border-white/10 p-4 fixed top-0 w-full"
        initial = {{right: 100 }}
        animate = {{
            left: 0 ,
            transition: {duration: 2}
        }}
        >
            <div className="flex items-center justify-between bg-transparent gap-40">
                <div className="text-3xl font-bold tracking-tighter text-white">MGdev</div>
                <ul className="flex items-center justify-between w-1/3 gap-10 text-white text-xl">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Teach</a></li>
                    <li><a href="#">Project</a></li>
                </ul>

                <div className="bg-gray-200 px-10 py-1 rounded-lg">
                    <img width={30} src="/github-icon.svg" alt="github-icon" />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
