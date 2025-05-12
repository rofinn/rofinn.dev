import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";
import { Waves } from "@/components/Waves";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Tools",
  description: "These are some of the tools I like to build with.",
};

export default function Uses() {
  return (
    <div className="tools">
      <Waves />
      <Container className="flex flex-col h-screen justify-center items-center flex-grow m-auto">
        <blockquote className="gap-y-8 flex flex-col items-end justify-end">
          <p className="font-semibold italic text-lg lg:text-2xl">
            "People think that computer science is the art of geniuses but the
            actual reality is the opposite,&nbsp; just many people doing things
            that build on each other, like a wall of mini stones."
          </p>
          <p className="text-lg lg:text-2xl">- Donald Knuth</p>
        </blockquote>
      </Container>
      <SimpleLayout
        title="Tools"
        intro="Everyone has their favorite programming languages, operating systems, database technologies, hardware, etc. This is just a list of some of the tools I like to work with."
        className=""
      >
        {/* Add a description to each tools section */}
        <div className="space-y-8">
          <ToolsSection title="Languages">
            <Tool title="Julia">
              Anytime I need to do a some data analysis or build a custom model
              I tend to start a Julia REPL. Yeah, I know, R exists and Python
              has libraries that usually do what I need, but it just ticks all
              the boxes for these problems. Pretty good AD and stats packages
              along with syntax that makes porting an academic paper over really
              intuitive.
            </Tool>
            <Tool title="Python">
              It's just a good general purpose scripting language that's
              installed on most Linux distros. There's usually a package to do
              whatever you need and it's hard to write completely unreadable
              code. That being said, it isn't particular good at anything (e.g.,
              performance, package management, web dev)
            </Tool>
            <Tool title="Rust">
              This is still a new one for me, but I'm really enjoying Rust. It
              feels like a blend of C++ and Haskell, but with a good package
              manager and a strict compiler. I've heard the learning curve goes
              in waves, so I might have a different opinion in a bit :)
            </Tool>
            <Tool title="Shell">
              I don't know if this counts as a language, but I'd say I'm writing
              some kind of shell script most days. Typically, for projects in
              flux it isn't worth writing a proper Python script or ansible
              playbook, but I'm also too lazy to rerun the same commands every
              time.
            </Tool>
            <Tool title="Typescript">
              The necessary evil for any frontend work nowadays. I've heard
              rumours that some folks use it for backend work too, but apart
              from not wanting to learn another language I can't see why :) I'm
              also gonna lump things like React/Nextjs, CSS/Tailwind and HTML in
              with this.
            </Tool>
            <Tool title="...">
              I've also been known to use a variety of other languages
              including: C/C++, Java, Lisp, MATLAB, Perl, Prolog, and R. That
              being said, I wouldn't describe these languages as my go-to tools
              for most projects and my experience is largely tied to maintaining
              existing codebases.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Databases">
            <Tool title="DuckDB">
              My go to in-memory OLAP database for prototyping and analysis
              projects. The fact that it's still just a relational database
              means it has largely replaced my uses of SQLite.
            </Tool>
            <Tool title="PostgreSQL">
              Good old Postgres. It always seems like the Fedora of database...
              Reliable read-write performance, but still flexible enough to
              cover different applications (e.g., JSON objects, GIS support).
            </Tool>
            <Tool title="SQLite">
              For years, this was my go-to database for prototyping and testing.
              More recently this has been replaced by duckdb for my
              proof-of-concept projects, which tends to be more analysis heavy.
              Still, if someone asked me for a stable in-memory SQL database to
              use for testing I'd probably still recommend this. It's just a
              more mature project.
            </Tool>
            <Tool title="...">
              While I have some experience working with NoSQL databases like
              Mongo, Dynamo or Redis, each of these tools seemed rather niche to
              a very specific dataset or use case. In my experience, SQL is a
              pretty universal query language among developers, data scientists
              and research, so using something else would require a pretty
              significant justification.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Hardware">
            <Tool title="Fedora Workstation, i7, 128GM RAM, 32TB Storage, RTX 4090">
              For running all my personal services and a gaming VM, I've been
              pretty happy with my Fedora Linux box. Having a full size box has
              made upgrading parts over the years super easy. I'm pretty sure
              the case is almost 15 years old. When it comes to running a bunch
              of docker containers, VMs and doing a GPU PCIe passthrough it's
              really hard to beat the versatility of linux. I'll probably
              continue distro hopping at some point, but I've been pretty happy
              with Fedora's rolling release schedule.
            </Tool>
            <Tool title="M1 MacBook Pro, 64GB RAM (2021)">
              For most of my day-to-day tasks that I might want to take on the
              go. Jumping to M1 from Intel was like night and day, even for code
              running with Rosetta. Compute heavy workloads completed in half
              the time and without my laptop into a space heater :)
            </Tool>
            <Tool title="Dual Monitors (1080p)">
              I'm not a big display geek, as long as the text is clear and it
              has the right ports. However, I have found that a dual monitor
              setup is almost required at this point.
            </Tool>
            <Tool title="Keychron K8 Keyboard">
              I know some folks have strong opinions about mechanical keyboards.
              I don't think the keychron is anything to write home about, but
              it's been a pretty good value and I can connect it wirelessly to 3
              different systems.
            </Tool>
            <Tool title="MX Master 2S">
              It's just the go-to ergonomic mouse. Like the keychron it can
              connect to 3 different computers. Being able to use the same
              keyboard and mouse for my macbook, linux box and windows gaming VM
              without a dedicated KVM switch is really nice.
            </Tool>
            <Tool title="Apple Magic Trackpad">
              It's just nice alternative to a mouse when I need it.
            </Tool>
            <Tool title="Secretlab Sit-to-Stand Desk">
              I wanted a sit-to-stand desk for years, but was always worried
              about build quality. I'd read about wobbly desks in the standing
              position or failed leg motors. After a few months of daily use,
              the secretlab desk seems to be holding up well and feels very
              sturdy. Given how heavy it is I'd hope so :)
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Zed">
              I've been through a lot of editors over the years. `vim` is still
              my(the) default for modifying files on remote linux servers, but
              it's also the 21st century and it's okay to want a GUI. Also, if
              I'm actively developing software on a remote linux server then
              I've done something wrong. If I'm forced to write software on
              Windows then I can't recommend Visual Studio enough. It's arguably
              the be piece of software that Microsoft has produced, since GitHub
              was technical just aquired :) For everything else, I've tried
              `kate`, `gedit`, `sublime`, `vscode`, `atom`, etc and either found
              them lacking on features or just slow. So far, `zed` seems to hit
              that nice middle ground of being fast, but also including all the
              basic features I want like a file manager, git integration,
              formatting, etc. I honestly couldn't care about the AI assistant,
              but the collab features seem interesting.
            </Tool>
            <Tool title="WezTerm">
              I'm still in testing mode, but having a modern terminal
              configuration that works on all platforms is pretty nice.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </div>
  );
}
