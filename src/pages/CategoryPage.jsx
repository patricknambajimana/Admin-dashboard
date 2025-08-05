import { useTheme } from "../hooks/useTheme";
const CategoryPage = () => {
  const {theme} = useTheme()
  return <div className={` theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
       >CategoryPage</div>;
};
export default CategoryPage;
