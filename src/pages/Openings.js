import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    UnorderedList,
    ListItem,
    Link
} from '@chakra-ui/react';

const Openings = () => {
    const jobs = [
        {
            title: 'iOS Developer',
            description: (
                <>
                    <Text fontWeight="bold">iOS DEVELOPER</Text>
                    <Text fontWeight="bold">Location: Chennai, India or Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:iOSDev@igethappy.com" color="teal.500">
                            iOSDev@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed iOS Developer who share our vision of improving people’s lives through technology.</Text>
                    <Text fontWeight="bold" mt={4}>Role Description</Text>
                    <Text>This is a role for Mobile Developer in the iOS mobile platform. The Mobile Developers will update and further refine an existing mobile application. There is already a partially developed and tested existing code base in both iOS and Android but it's outdated according to current standards. To bring it up to par, the developers will need to upgrade all the libraries and plugins and perform QA to test the app. There is also backend work to ensure that the APIs can exchange data.</Text>
                    <Text>Your day-to-day tasks will include designing and implementing user interfaces, debugging and fixing issues, collaborating with cross-functional teams, and ensuring the performance and security of the application.</Text>
                    <Text fontWeight="bold" mt={4}>Required Skillsets:</Text>
                    <UnorderedList>
                        <ListItem>Strong knowledge of programming languages (Swift, Objective-C)</ListItem>
                        <ListItem>Familiarity with mobile app development tools like Xcode</ListItem>
                        <ListItem>Experience with mobile APIs, third-party libraries, and frameworks like UIKit/SwiftUI</ListItem>
                        <ListItem>Understanding of app architecture and design patterns like MVP</ListItem>
                        <ListItem>Experience with Git and version control software</ListItem>
                        <ListItem>Comfortable working with legacy code bases and migrating Objectvie-C to Swift</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold">Compensation: Negotiable with preference for qualified candidates interested in equity.</Text>
                </>
            ),
        },
        {
            title: 'Android Developer',
            description: (
                <>
                    <Text fontWeight="bold">ANDROID DEVELOPER</Text>
                    <Text fontWeight="bold">Location: Chennai, India or Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:AndroidDev@igethappy.com" color="teal.500">
                            AndroidDev@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed Android Developer who share our vision of improving people’s lives through technology.</Text>
                    <Text>We are planning a Beta launch of the App in select Global Markets in the next few months and need committed and strong developers with a passion for technology and who believe in the mission of the App/product to improve people’s lives.</Text>
                    <Text fontWeight="bold" mt={4}>Android Developer Role Description</Text>
                    <Text>We are seeking a talented and motivated Android Developer to join our development team. The ideal candidate will have a strong passion for mobile app development, a solid understanding of the Android platform, and a proven track record of building high-quality Android applications. From concept to deployment, you will play a key role in designing, developing, and maintaining our Android apps, ensuring they are intuitive, efficient, and scalable.</Text>
                    <Text fontWeight="bold" mt={4}>Responsibilities:</Text>
                    <UnorderedList>
                        <ListItem>Collaborate with a cross-functional team to define, design, and implement innovative Android solutions.</ListItem>
                        <ListItem>Develop and maintain high-quality, reusable, and efficient codebase for Android applications using Java, Kotlin, and XML.</ListItem>
                        <ListItem>Implement engaging user interfaces and user experiences that adhere to design guidelines and best practices.</ListItem>
                        <ListItem>Integrate with backend services, APIs, and third-party libraries to support app functionality and data exchange.</ListItem>
                        <ListItem>Conduct code reviews, unit tests, and debugging to ensure code quality, performance, and reliability.</ListItem>
                        <ListItem>Optimize app performance, memory usage, and battery life to deliver smooth and responsive user experiences.</ListItem>
                        <ListItem>Stay up-to-date with the latest Android technologies, trends, and best practices, and share knowledge with the team.</ListItem>
                        <ListItem>Work closely with QA engineers to identify and resolve issues, bugs, and performance bottlenecks.</ListItem>
                        <ListItem>Collaborate with the product management team to prioritize features, plan sprints, and meet project deadlines.</ListItem>
                        <ListItem>Continuously seek opportunities to improve development processes, tools, and workflows to enhance productivity and efficiency.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Qualifications:</Text>
                    <UnorderedList>
                        <ListItem>Bachelor's or Master’s degree in Computer Science, Software Engineering, or related field.</ListItem>
                        <ListItem>Proven experience as an Android Developer, with a strong portfolio of Android applications published on the Google Play Store.</ListItem>
                        <ListItem>Proficiency in Kotlin and/or Java programming languages, with a deep understanding of Android SDK, frameworks, and APIs.</ListItem>
                        <ListItem>Solid understanding of software development principles, design patterns, and best practices.</ListItem>
                        <ListItem>Experience with RESTful APIs, JSON, and web services integration.</ListItem>
                        <ListItem>Convert java to Kotlin</ListItem>
                        <ListItem>How to use Dagger Hilt</ListItem>
                        <ListItem>Retrofit to make network calls</ListItem>
                        <ListItem>MVVM architecture</ListItem>
                        <ListItem>View Binding</ListItem>
                        <ListItem>XML Views</ListItem>
                        <ListItem>Jetpack compose</ListItem>
                        <ListItem>Unit Testing</ListItem>
                        <ListItem>UI Testing</ListItem>
                        <ListItem>Kotlin Corrutines</ListItem>
                        <ListItem>GSON/Moshi JSON Adapters</ListItem>
                        <ListItem>Repository patterns</ListItem>
                        <ListItem>Familiarity with version control systems such as Git.</ListItem>
                        <ListItem>Strong problem-solving skills and attention to detail.</ListItem>
                        <ListItem>Excellent communication and collaboration skills.</ListItem>
                        <ListItem>Ability to thrive in a fast-paced, dynamic environment and adapt to changing priorities.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Compensation:</Text>
                    <Text>Based on experience. Strong preference given to qualified candidates interested in the mission and equity comp.</Text>
                </>
            ),
        },
        {
            title: 'CTO - Co-Founder',
            description: (
                <>
                    <Text fontWeight="bold">CTO - Co-Founder</Text>
                    <Text fontWeight="bold">Location: Chennai, India and Rockwall, Texas and Hybrid/Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:CTO@igethappy.com" color="teal.500">
                            CTO@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed CTO - Co-Founder who share our vision of improving people’s lives through technology.</Text>
                    <Text fontWeight="bold" mt={4}>Role Description</Text>
                    <Text>This is a full-time role for a Co-Founder - CTO at I Get Happy, LLC. As the Co-Founder- CTO, your role will involve rolling up your sleeves, writing code and overseeing the technical aspects of the company's mobile and SaaS products. You will be responsible for hands-on coding and leading/mentoring a dedicated team of engineers, developing and executing the technical roadmap, and ensuring the timely delivery of high-quality products. This is a hybrid role located in Chennai, India and Rockwall, TX, with flexibility for remote work.</Text>
                    <Text fontWeight="bold" mt={4}>Qualifications</Text>
                    <UnorderedList>
                        <ListItem>Analytical skills, communication skills, and research skills</ListItem>
                        <ListItem>Proven experience in Mobile Apps (iOS and Android), SaaS technologies and product development</ListItem>
                        <ListItem>Experience with AI Tools and GenAI and its applicability to our products</ListItem>
                        <ListItem>Excellent problem-solving and decision-making skills</ListItem>
                        <ListItem>Bachelor's or master's degree in computer science or a related field</ListItem>
                        <ListItem>Experience in startup environments is a must</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold">Compensation: Negotiable with preference for qualified candidates interested in equity.</Text>
                </>
            ),
        },
        {
            title: 'AI Engineer - iOS and Android Mobile App',
            description: (
                <>
                    <Text fontWeight="bold">AI Engineer - iOS and Android Mobile App</Text>
                    <Text fontWeight="bold">Location: Chennai, India or Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:AIEngineer@igethappy.com" color="teal.500">
                            AIEngineer@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed AI Engineers who share our vision of improving people’s lives through technology.</Text>
                    <Text fontWeight="bold" mt={4}>Position Overview</Text>
                    <Text>We are looking for a talented AI Engineer to join our mobile app development team. The ideal candidate will have a strong background in AI and machine learning, with expertise in developing facial detection for sentiment analysis and fully functional chatbots. From architecture to deployment, you will play a pivotal role in building AI-powered systems that deliver seamless user experiences across platforms.</Text>
                    <Text fontWeight="bold" mt={4}>Responsibilities:</Text>
                    <UnorderedList>
                        <ListItem>Design, develop, and maintain AI-driven features such as facial detection for sentiment analysis and fully functioning chatbots.</ListItem>
                        <ListItem>Collaborate with cross-functional teams including frontend developers, mobile app developers, and product managers to integrate AI features seamlessly into our iOS and Android applications.</ListItem>
                        <ListItem>Architect efficient algorithms and models to support AI-driven functionalities.</ListItem>
                        <ListItem>Implement AI-driven server-side logic to enhance user experiences and application functionality.</ListItem>
                        <ListItem>Optimize AI model performance, scalability, and reliability to ensure smooth operation under varying conditions.</ListItem>
                        <ListItem>Implement security best practices and protocols to protect sensitive AI data and prevent unauthorized access.</ListItem>
                        <ListItem>Monitor, troubleshoot, and debug AI-driven systems to identify and resolve issues in a timely manner.</ListItem>
                        <ListItem>Collaborate with DevOps engineers to automate deployment processes and ensure continuous integration and delivery (CI/CD).</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Qualifications:</Text>
                    <UnorderedList>
                        <ListItem>Bachelor's or Master’s degree in Computer Science, Artificial Intelligence, or related field.</ListItem>
                        <ListItem>Proven experience as an AI Engineer, with a focus on developing AI-driven features for mobile applications.</ListItem>
                        <ListItem>Proficiency in AI and machine learning frameworks such as TensorFlow, PyTorch, or OpenCV.</ListItem>
                        <ListItem>Experience in developing facial detection algorithms for sentiment analysis and fully functional chatbots.</ListItem>
                        <ListItem>Familiarity with cloud platforms such as AWS, Azure, or Google Cloud Platform.</ListItem>
                        <ListItem>Excellent problem-solving skills and attention to detail.</ListItem>
                        <ListItem>Strong communication and collaboration skills.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Compensation:</Text>
                    <Text>Competitive salary based on experience. We strongly encourage qualified candidates who are interested in our mission and equity compensation to apply.</Text>
                </>
            ),
        },
        {
            title: 'Certified Yoga Instructor and Meditation Experts',
            description: (
                <>
                    <Text fontWeight="bold">Certified Yoga Instructor and Meditation Experts</Text>
                    <Text fontWeight="bold">Location: India, USA, Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:YogaMeditation@igethappy.com" color="teal.500">
                        YogaMeditation@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed Yoga Instructors and Meditation Experts who share our vision of improving people’s lives through technology.</Text>
                    <Text>We are planning a Beta launch of the App in select Global Markets in the next few months and want to add Certified Yoga and Meditation experts to our team who believe in the powerful transformative benefits of Yoga and Meditation techniques and the mission of the App/product to improve people’s lives.</Text>
                    <Text fontWeight="bold" mt={4}>Role Description</Text>
                    <Text>We are seeking passionate and experienced Yoga and Meditation Experts to join our team delivering virtual classes and sessions. The ideal candidates will possess in-depth knowledge of various yoga and meditation techniques, along with the ability to create customized programs to meet the diverse needs of our clients. This individual will lead group classes, private sessions, workshops, and retreats, fostering a supportive and inclusive environment for participants to explore and deepen their practice.</Text>
                    <Text fontWeight="bold" mt={4}>Qualifications:</Text>
                    <UnorderedList>
                        <ListItem>Certified Yoga and Meditation Instructor with a minimum of 3 years of teaching experience.</ListItem>
                        <ListItem>Proficient in various styles of Yoga, including Hatha, Vinyasa, Ashtanga, Yin, and Restorative.</ListItem>
                        <ListItem>Extensive knowledge of meditation techniques, mindfulness practices, and relaxation exercises.</ListItem>
                        <ListItem>Design and lead yoga and meditation classes for individuals of all skill levels, including beginners, intermediate, and advanced practitioners.</ListItem>
                        <ListItem>Develop personalized yoga and meditation programs tailored to the specific goals, preferences, and abilities of clients.</ListItem>
                        <ListItem>Provide clear and concise instructions, demonstrations, and modifications to ensure participants safely and effectively execute poses and techniques.</ListItem>
                        <ListItem>Cultivate a welcoming and inclusive atmosphere that encourages mindfulness, relaxation, and self-awareness.</ListItem>
                        <ListItem>Offer guidance and support to clients on proper breathing techniques, alignment, meditation practices, and stress management strategies.</ListItem>
                        <ListItem>Stay informed about current trends, research, and best practices in yoga, meditation, and wellness, incorporating new knowledge into class curriculums and teachings.</ListItem>
                        <ListItem>Maintain a clean and organized studio space, ensuring all equipment is properly set up and sanitized before and after each Virtual session.</ListItem>
                        <ListItem>Promote upcoming classes, workshops, and events through marketing initiatives, social media platforms, and community outreach efforts.</ListItem>
                        <ListItem>Provide individualized attention and feedback to clients, offering encouragement, motivation, and assistance as needed.</ListItem>
                        <ListItem>Continuously evaluate the effectiveness of class offerings and make adjustments as necessary to enhance the overall experience for participants.</ListItem>
                        <ListItem>Strong communication and interpersonal skills, with the ability to connect authentically with clients and create a supportive community.</ListItem>
                        <ListItem>CPR and First Aid certification preferred.</ListItem>
                        <ListItem>Experience leading workshops, retreats, or specialized programs is a plus.</ListItem>
                        <ListItem>Passion for holistic health and wellness, with a genuine desire to help others achieve their wellness goals.</ListItem>
                        <ListItem>Flexibility to work evenings, weekends, and holidays as needed to accommodate class schedules and events.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Compensation:</Text>
                    <Text>Negotiable. Based on experience.</Text>
                </>
            ),
        },
        {
            title: 'Therapists, Counselors, Psychologists',
            description: (
                <>
                    <Text fontWeight="bold">Therapists, Counselors, Psychologists</Text>
                    <Text fontWeight="bold">Location: India, USA, Remote</Text>
                    <Text>
                        Please send your resume and cover letter with attached GitHub/code references to{' '}
                        <Link href="mailto:WellnessPros@igethappy.com" color="teal.500">
                        WellnessPros@igethappy.com
                        </Link>
                    </Text>
                    <Text fontWeight="bold" mt={4}>Company Description</Text>
                    <Text>I Get Happy is a pioneering company dedicated to transforming emotional and mental wellness through our iOS and Android mobile app. Leveraging cutting-edge AI technology, we aim to provide personalized solutions to enhance users' emotional well-being. Additionally, we offer a specialized SaaS product tailored for Behavioral Health professionals and practice groups. Our dedicated team is currently working to modernize our existing codebase to meet current standards. With a partially developed codebase, comprehensive design documents, and complete Figma designs, we are poised for a Beta launch in select global markets in the coming months. We are seeking passionate and committed Therapists, Counselors, Psychologists who share our vision of improving people’s lives through technology.</Text>
                    <Text>We are planning a Beta launch of the App in select Global Markets in the next few months and want to add therapists, counselors, and psychologists committed to helping clients navigate life's challenges, overcome obstacles, and achieve personal growth and healing. You will be conducting text, voice and video consults through our App.</Text>
                    <Text fontWeight="bold" mt={4}>Position Overview</Text>
                    <Text>We are seeking qualified and empathetic Therapists, Counselors, and Psychologists to join our dynamic team. The ideal candidates will have a strong clinical background and expertise in providing evidence-based therapy and counseling services to clients across the lifespan. From individual therapy to couples counseling, family therapy, and group sessions, our therapists play a crucial role in supporting clients on their journey towards improved mental health and well-being. You will be conducting text, voice and video consults through our App.</Text>
                    <Text fontWeight="bold" mt={4}>Responsibilities:</Text>
                    <UnorderedList>
                        <ListItem>Conduct comprehensive assessments to evaluate clients' mental health concerns, strengths, and treatment needs.</ListItem>
                        <ListItem>Develop personalized treatment plans based on clients' goals, preferences, and clinical presentations.</ListItem>
                        <ListItem>Provide individual therapy, counseling, and psychoeducation to clients using evidence-based modalities such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Acceptance and Commitment Therapy (ACT), and others.</ListItem>
                        <ListItem>Facilitate couples counseling sessions to address relationship issues, communication challenges, and conflict resolution strategies.</ListItem>
                        <ListItem>Lead family therapy sessions to enhance family dynamics, improve communication skills, and resolve interpersonal conflicts.</ListItem>
                        <ListItem>Conduct group therapy sessions on topics such as stress management, mindfulness, coping skills, and emotional regulation.</ListItem>
                        <ListItem>Collaborate with multidisciplinary teams, including psychiatrists, social workers, case managers, and other healthcare professionals, to ensure coordinated and holistic care for clients.</ListItem>
                        <ListItem>Maintain accurate and timely documentation of client progress, treatment plans, and session notes in accordance with ethical and legal standards.</ListItem>
                        <ListItem>Stay abreast of current research, best practices, and advancements in the field of mental health and psychology, integrating new knowledge into clinical practice.</ListItem>
                        <ListItem>Participate in regular supervision, consultation, and professional development activities to enhance clinical skills and competencies.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Qualifications:</Text>
                    <UnorderedList>
                        <ListItem>Master's or Doctoral degree in Counseling, Psychology, Social Work, or related field from an accredited institution.</ListItem>
                        <ListItem>Licensure or eligibility for licensure as a therapist, counselor, or psychologist. List states and countries of eligibility.</ListItem>
                        <ListItem>Clinical experience providing therapy and counseling services to individuals, couples, families, and groups in a mental health setting.</ListItem>
                        <ListItem>Strong assessment, diagnostic, and treatment planning skills, with the ability to formulate accurate clinical impressions and develop effective interventions.</ListItem>
                        <ListItem>Excellent communication and interpersonal skills, with the ability to establish rapport, demonstrate empathy, and create a supportive therapeutic alliance with clients.</ListItem>
                        <ListItem>Commitment to cultural competence, diversity, equity, and inclusion in clinical practice.</ListItem>
                        <ListItem>Adherence to ethical guidelines and professional standards of conduct set forth by relevant licensing boards and professional organizations.</ListItem>
                        <ListItem>Flexibility to work a combination of daytime, evening, and weekend hours to accommodate client schedules.</ListItem>
                    </UnorderedList>
                    <Text fontWeight="bold" mt={4}>Compensation:</Text>
                    <Text>Negotiable. Based on Experience.</Text>
                </>
            ),
        }
    ];

    return (
        <Box p={5}>
            <Text fontSize="2xl" mb={5}>Openings at I Get Happy</Text>
            <Accordion allowToggle>
                {jobs.map((job, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    {job.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {job.description}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box>
    );
};

export default Openings;