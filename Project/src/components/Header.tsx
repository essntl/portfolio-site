import SplitText from "./SplitText";
import FadeContent from "./FadeContent";

function Header() {
  return (
    <header className="">
    <FadeContent
        duration={2}
        blur={true}
        ease="power3.out"
        threshold={0.1}
    >
      <SplitText
        text="Welcome to my website!"
        tag="h1"
        className="text-5xl font-semibold text-center h-auto"
        delay={70}
        duration={2}
        ease="elastic.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.5}
        rootMargin="-100px"
        textAlign="center"
      />
      </FadeContent>
    </header>
  );
}
export default Header;
