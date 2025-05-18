# Let’s talk about p\*\*\*\*\*\*
I’ve been lucky to work as a software developer and researcher at various companies and labs. The work has varied regarding what is produced and what technologies are leveraged, but the usual friction points always arise.

1. **Time estimates** - Are almost always wrong, so you’re better off under-promising and over-delivering.
2. **System design** - There are often several ways to solve the same problem. Most views will be personal preferences and opinions until you have a clear picture of your usage, team, and requirements.
3. **Tech stack** - Everyone has a favourite language, editor, OS, database, etc. The trick is to know which to use for the problem and/or user base.

One point of contention that has always surprised me has been.

**”Process”**

Yes, that big, scary word people seem to think is synonymous with bureaucracy, red tape, and endless meetings. I kid, but I’m always surprised how some organizations describe a lack of “process” as a source of pride. As if a lack of process magically makes you more efficient or helps you get along better with your coworkers. Perhaps I’ve had too many positive experiences with organizations that took care in developing, but more importantly, maintaining the processes that worked for them. I get it; similar to tests and documentation, a bad process is worse than no process. That being said, that isn’t an excuse to avoid it.

Taking a step back, I’m reminded of Donella Meadows “Thinking in Systems”.

> A system isn’t just any old collection of things. A system is an interconnected set of elements that is coherently organized in a way that achieves something. If you look at that definition closely for a minute, you can see that a system must consist of three kinds of things: elements, interconnections, and a function or purpose.

If I think about poor implementations of software documentation, testing or general process, they almost always focus too heavily on the “elements” or the “function” at the expense of the “interconnections”. Unit tests that were explicit and effective but so rigid and verbose were unmanageable to maintain. Documentation that was carefully structured and organized, but tedious to update when things inevitably changed. From my perspective, the “interconnections” are how we, as mere humans, interact with the tools, software, or processes we create. Despite terms like computer science or software engineering, our field is inherently about people and the interconnections between us. Just like we should build software with the expectation that it will evolve and change over time, we should build our organizational processes to do the same.

Rather than discussing software development, processes, and systems, let’s go through some simple examples of what good and bad processes look like.

## Wiki (+)

I’ve worked at two different organizations that maintained a central wiki. In both cases, this was just a simple git repository of markdown files. The particular technology doesn’t matter, but here are the parts that did.

1. Onboarding required following and updating the wiki
2. The wiki had maintainers who reviewed changes and escalated unusual requests as necessary
3. Everyone knew where to go for guides, policy documents, etc
4. Everyone could recommend a change to the guides, policy documents, etc

Why were these components so important? It made the “wiki” the centralized evolving source of truth anyone could contribute to. This knowledge repository was maintained; ideally, it had some version control to identify when a policy or guide was changed and by whom.

## Project Templates (+)

Another great process that evolved at my last job was the idea of “project templates”. Inevitably, the first iteration of these documents was overly verbose and somewhat tedious to write. It often felt like we spent more time writing these documents than solving problems or implementing new features.
It seemed like nobody read these documents. However, this changed over time by lowering the friction and structure of these documents and focusing more on owners, short summaries, objectives, and key results.

1. Teams spent less time writing or arguing about project documentation. They often added appendices with more detailed information that made sense for the particular project.
2. Folks tended to read/refer to the documents more often. They were quick to read and included just enough information to assess the objective, how success was being measured, and who to talk to for more information.

A point I’m glossing over, but it overlaps with the wiki, is that these documents were all stored in a central repository that everyone knew how to access.

## Release Notes (+)
This seems like a no-brainer, especially since it is so easy to autogenerate them when you tag releases. That said, they are often overlooked in software development projects. The ability to quickly review what features, bug fixes and breaking changes were introduced in any given release makes it much easier to track down dependency hell issues. There are a few requirements for these to make sense:

1. They need to be consistent. Since you can’t have release notes for only some releases, your best bet is to automate the process.
2. Change descriptions should be terse (ideally PR titles) with links for more detail.
3. It helps if you release often. Reading an extensive list of changes in release notes is still just tedious.
4. Use SemVer properly. It isn’t perfect, but it helps provide a release context. It also makes it easy to know when a ticket should be opened if a breaking change slipped into a non-breaking release.

Finally, from an organizational perspective, reliable release notes and building tools that combine them from different project dependencies being updated help when assessing risk during a production application release.

**Okay, so what are some examples of bad processes then?**

I don’t want to spend too much time on the negative examples, but I’m sure we’ve all experienced them.
## Forms (-)
I wasn’t sure how else to describe this one, but we’ve all experienced it. Some managers decided that having a complicated and verbose document for every little change you want to make would be good. If the answer to any of these questions is “I don’t know,” then you’ve just created busy work.

1. Who should fill out this document?
2. What is the objective of this document?
3. Who reads these documents?
4. How do I fill this document out?

In some cases, there may be legitimate legal or business reasons for these forms, but your coworkers should still be able to answer the above questions easily.

## Workflows (-)

I like a good flow chart as much as anyone, but too often we get hung up on a particular set of steps being followed. Similar to forms, any individual using your workflow should be able to answer:

1. What does each step involve?
2. Why does it exist?
3. Why is the order of operations important?
4. Which steps can be done concurrently?
5. How do we iterate on the workflow?

Again, if your coworkers can't answer these questions, you've done a poor job designing or communicating the workflow.

## Access Management (-)
I've been picking on management-related workflows, but tech isn't any better. Most folks can relate to weird, inconsistent, or broken access management processes. You may be six months into a job, and nobody realizes you can't access a production machine until you're on-call. You may have five different accounts, but the company hasn't figured out how to set up single sign-on. I get it, too broad, and you've created security vulnerabilities. Many system admins don't acknowledge that overly strict or manual access management policies will inevitably lead to credential sharing and security problems down the line. Balancing strict yet general access management policies is vital to a company's long-term viability.


## TL;DR

A good process:
- has a clear purpose and intent
- requires persistence and iteration
- requires communication and understanding
- enables people

A bad process:
- is opaque
- is inconsistent
- is inflexible
- is just busy work