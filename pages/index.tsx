import Link from "next/link";

const IndexPage = () => {
  return (
    <div className="justify-center">
      <h1 className="text-2xl pb-8">
        Hey Internet, Welcome to my digital crib.
      </h1>

      <div>
        <p>
          This site hosts <Link href="/writing">thoughts</Link> and{" "}
          <Link href="/projects">projects</Link> on topics* I'm interested in.
        </p>
      </div>
    </div>
  );
};

export default IndexPage;
