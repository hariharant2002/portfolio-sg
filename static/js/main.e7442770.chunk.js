(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{78:function(e,t,i){},79:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},82:function(e,t,i){},83:function(e,t,i){},90:function(e,t,i){},97:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(12),s=i.n(c),r=(i(78),i(79),i(80),i(81),i(82),i(83),i(68)),l=i(53),o=i(54),A=i(33),d=i(69),b=i(67),h=i(41),j=i.n(h),u=i(1),g=function(e){Object(d.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(l.a)(this,i),(e=t.call(this)).select=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?Object(r.a)(document.querySelectorAll(e)):document.querySelector(e)},e.on=function(t,i,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=e.select(i,a);c&&(a?c.forEach((function(e){return e.addEventListener(t,n)})):c.addEventListener(t,n))},e.onscroll=function(e,t){e.addEventListener("scroll",t)},e.navbarlinksActive=function(){var e=document.querySelectorAll("#navbar .scrollto"),t=window.scrollY+200;e.forEach((function(e){if(e.hash){var i=document.querySelector(e.hash);i&&(t>=i.offsetTop&&t<=i.offsetTop+i.offsetHeight?e.classList.add("active"):e.classList.remove("active"))}}))},e.scrollto.bind(Object(A.a)(e)),e.select.bind(Object(A.a)(e)),e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.navbarlinksActive),this.onscroll(document,this.navbarlinksActive),this.on("click",".mobile-nav-toggle",(function(e){document.querySelector("body").classList.toggle("mobile-nav-active"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),this.on("click",".scrollto",(function(e){if(document.querySelector(this.hash)){e.preventDefault();var t=document.querySelector("body");if(t.classList.contains("mobile-nav-active")){t.classList.remove("mobile-nav-active");var i=document.querySelector(".mobile-nav-toggle");i.classList.toggle("bi-list"),i.classList.toggle("bi-x")}var n=document.querySelector(this.hash).offsetTop;window.scrollTo({top:n,behavior:"smooth"})}}),!0)}},{key:"scrollto",value:function(e){var t=document.querySelector(e).offsetTop;window.scrollTo({top:t,behavior:"smooth"})}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{class:"bi bi-list mobile-nav-toggle d-xl-none",style:{color:"rgb(114, 131, 148)"}}),Object(u.jsx)("header",{id:"header",className:"header d-flex flex-column justify-content-center",children:Object(u.jsx)("nav",{id:"navbar",className:"navbar nav-menu navbar-expand-sm",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#hero",className:"nav-link scrollto active d-flex justify-content-center",children:[Object(u.jsx)("i",{class:"bx bx-home"}),Object(u.jsx)("span",{children:"Home"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#about",className:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)("i",{class:"bx bx-user"}),Object(u.jsx)("span",{children:"About"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#education",class:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)(j.a,{}),Object(u.jsx)("span",{children:"Education"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#experience",class:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)("i",{class:"bx bx-briefcase"}),Object(u.jsx)("span",{children:"Experience"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#projects",class:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)("i",{className:"bx bx-code"}),Object(u.jsx)("span",{children:"Projects"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#publications",class:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)("i",{class:"bx bx-award"}),Object(u.jsx)("span",{children:"Publications"})]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("a",{href:"#achievements",class:"nav-link scrollto d-flex justify-content-center",children:[Object(u.jsx)("i",{class:"bx bx-award"}),Object(u.jsx)("span",{children:"Achievements"})]})})]})})})]})}}]),i}(a.a.Component),m=i.p+"static/media/sowms.9649cd69.jpg",x=i(56),f=i.n(x),p=i(43),O=i(36),v=i(22),y=i(118),T=i(57),w=i.n(T);function S(){return Object(u.jsx)("section",{id:"hero",class:"d-flex flex-column justify-content-center",children:Object(u.jsx)(p.a,{"data-aos":"zoom-in","data-aos-delay":"500",children:Object(u.jsxs)(O.a,{children:[Object(u.jsxs)(v.a,{lg:6,className:"item-center",children:[Object(u.jsx)("h1",{children:"Sowmiya Ganesh"}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["I'm a\xa0",Object(u.jsx)("span",{class:"typed","data-typed-items":"Developer, Data Scientist, ML Enthusiast",children:Object(u.jsx)(f.a,{strings:["Developer","Data Scientist","ML Enthusiast"],loop:!0,typeSpeed:90,backSpeed:60,smartBackspace:!0,shuffle:!1,backDelay:500,fadeOut:!0,fadeOutDelay:200,loopCount:0,showCursor:!0,cursorChar:"|"})})]}),Object(u.jsxs)("div",{class:"social-links",children:[Object(u.jsx)("a",{href:"https://www.youtube.com/channel/UC8TXgNmZW2hMis074yGOTUQ",children:Object(u.jsx)("i",{class:"bx bxl-youtube"})}),Object(u.jsx)("a",{href:"https://github.com/sowmiya81",children:Object(u.jsx)("i",{class:"bx bxl-github"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/sowmiyalkshmi-ganesh/",children:Object(u.jsx)("i",{class:"bx bxl-linkedin"})}),Object(u.jsx)("a",{href:"mailto:sowmiyalakshmig@gmail.com",children:Object(u.jsx)("i",{class:"bx bx-envelope"})})]}),Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"outlined",target:"_blank",href:"https://drive.google.com/file/d/1XVfSZNcC6P9QlmEgA3s1Ebi23kydQGYj/view?usp=sharing",startIcon:Object(u.jsx)(w.a,{}),style:{color:"rgb(116, 128, 138)",borderColor:"rgb(116, 128, 138)"},children:"Download Resume"})]}),Object(u.jsx)(v.a,{lg:6,style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"15px"},children:Object(u.jsx)("img",{src:m,height:"100%",width:"65%",style:{borderRadius:"30px"}})})]})})})}var k=i.p+"static/media/My cutieee.3a1a5e1f.jpeg";function C(){return Object(u.jsx)("section",{id:"about",class:"about background-alt",children:Object(u.jsxs)(p.a,{"data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{children:"About"})}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(v.a,{lg:4,className:"d-flex justify-content-center",children:Object(u.jsx)("img",{src:k,height:"100%",width:"75%",style:{borderRadius:"50%"}})}),Object(u.jsxs)(v.a,{lg:8,pt:4,className:"content",children:[Object(u.jsx)("br",{}),Object(u.jsx)("h3",{children:"Data Scientist"}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{style:{color:"#728394"},children:"A passionate Full Stack Developer, Data Scientist and ML enthusiast."}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{style:{color:"#728394"},children:"Always seeking challenging position in and organization where my skills find ample of oppurtunities for upgradation and growth of the company."}),Object(u.jsx)("br",{}),Object(u.jsxs)(O.a,{children:[Object(u.jsx)(v.a,{lg:4,children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(u.jsx)("strong",{children:"Phone:"})," ",Object(u.jsx)("span",{children:"+1 9492279144"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(u.jsx)("strong",{children:"City:"})," ",Object(u.jsx)("span",{children:"California, USA"})]})]})}),Object(u.jsx)(v.a,{lg:7,children:Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(u.jsx)("strong",{children:"Degree:"})," ",Object(u.jsx)("span",{children:"Master's - Data Science @ UCI (2024-2025)"})]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("i",{class:"bi bi-chevron-right"})," ",Object(u.jsx)("strong",{children:"Email:"})," ",Object(u.jsx)("span",{children:Object(u.jsx)("a",{href:"mailto:borolebhushan8@gmail.com",children:"sowmiyalakshmig@gmail.com"})})]})]})})]})]})]})]})})}i(90);var D=[{title:"Languages",skills:["Java","Python","SQL"]},{title:"Frontend Development",skills:["React","Next.js","Tailwind CSS","Redux"]},{title:"Backend Development",skills:["Node.js","Express","REST APIs","GraphQL"]},{title:"Database",skills:["MongoDB","PostgreSQL","MySQL"]},{title:"DevOps & Cloud",skills:["Docker","AWS","Git"]}],N=function(){return Object(u.jsx)("section",{id:"skills",className:"skills-wrapper",children:Object(u.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{className:"section-title",children:Object(u.jsx)("h2",{children:"Skills"})}),Object(u.jsx)("div",{className:"skills-grid",children:D.map((function(e,t){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("div",{className:"tags",children:e.skills.map((function(e,t){return Object(u.jsx)("span",{children:e},t)}))})]},t)}))})]})})},E=i(16),P=(i(49),i(58)),M=i.n(P);function Q(){var e=[{date:"Jan 2024 - May 2024",cardTitle:"Indian Institute of Technology, Tirupati",cardSubtitle:"Machine Learning Intern",cardDetailedText:["Designed an advanced liver disease diagnosis system leveraging deep learning and computer vision, through Python-based image processing pipelines and custom neural network architectures.","Engineered a PyTorch based Unified Transformer model, by improvising attention mechanisms and feature extraction layers to enhance the diagnostic accuracy from 80% to 92%.","Enhanced image pre-processing with histogram equalization using OpenCV and fine-tuned the model with the LDAM loss function for addressing skewed data.","Visualized interactive medical imaging dashboards using Tableau to track model performance metrics and lesion detection patterns, allowing real-time monitoring of diagnostic accuracy across different liver conditions."].map((function(e){return Object(u.jsx)("li",{children:e})}))},{date:"May 2023 \u2013 July 2023",cardTitle:"ISRO Liquid Propulsion Systems Centre",cardSubtitle:"Machine Learning Intern",cardDetailedText:["Developed an image segmentation and defect detection system for aviation sub-components applying ML techniques.","Utilized the Canny algorithm from SciKits to improve edge detection, which accelerated the segmentation process, reducing the image inspection time from 2m to 1m.","Implemented the U-Net model using TensorFlow for its ability to preserve spatial features and accurately localize defects through its encoder-decoder architecture with skip connections","Achieved an improved accuracy of 89%, validated using Cohen\u2019s Kappa value of 0.85 , indicating strong agreement and reliable defect detection performance."].map((function(e){return Object(u.jsx)("li",{children:e})}))},{date:"Nov 2022 \u2013 Jan 2023",cardTitle:"Vellore Institute of Technology",cardSubtitle:"Research Assistant",cardDetailedText:["Architected a federated learning pipeline using the Flower framework to train a DenseNet-121 model across 3 distributed nodes, achieving 80% accuracy while maintaining data privacy.","Achieved a 20% reduction in memory usage on the central server through an innovative approach, optimizing overall computational efficiency and system performance."].map((function(e){return Object(u.jsx)("li",{children:e})}))}];return Object(u.jsx)("section",{id:"experience",class:"about background-alt",children:Object(u.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{children:"Experience"})}),Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(u.jsx)(E.VerticalTimeline,{className:"custom-line",children:e.map((function(e,t){return Object(u.jsxs)(E.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},date:e.date,dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(u.jsx)(M.a,{}),children:[Object(u.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"14",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(u.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1.2em",fontWeight:"350",color:"#7e8890"},children:e.cardSubtitle}),Object(u.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText})]},t)}))})})})]})})}var B=i.p+"static/media/Paper1.eeae71c2.jpg",L=i.p+"static/media/Paper2.9521eb7e.jpg",z=i.p+"static/media/Paper3.0b8abbc0.jpg",I=i(17),U=function(){var e=[{img:B,cardTitle:"Exploring Huntington\u2019s Disease Diagnosis via Artificial Intelligence Models: A Comprehensive Review",cardText:"Authored a review on leveraging AI for Huntington\u2019s Disease (HD) diagnosis, highlighting the potential of machine learning and deep learning in analyzing clinical, genetic, and neuroimaging data. Discussed the integration of multimodal data to improve predictive accuracy and patient outcomes. Explored current trends, methodologies, and challenges, emphasizing AI's role in enhancing diagnostic accuracy and early detection. Addressed limitations and ethical concerns of AI in HD diagnosis while proposing future research directions. Positioned the review as a vital resource for advancing AI applications in neurodegenerative disorder management.",btnText:"See More",btnUrl:"https://www.mdpi.com/2075-4418/13/23/3592"},{img:L,cardTitle:"Martian Terrain Classification through Federated Learning: A Decentralized Approach for Understanding the Mars",cardText:"Developed a federated learning approach using DenseNet-121 to classify Mars' topography into seven categories, including impact ejecta, dunes, craters, and spider formations. Leveraged the HiRISE dataset from the Mars Reconnaissance Orbiter, enhancing insights into Mars' geological processes and supporting safer mission planning. This approach enables collaborative learning across institutions while preserving data confidentiality and efficiently utilizing diverse datasets. This research aids in selecting optimal landing sites and ensuring secure navigation for future Mars missions. Positioned as a breakthrough in decentralized machine learning for space exploration while preserving data privacy.",btnText:"See More",btnUrl:"https://ieeexplore.ieee.org/abstract/document/10434826"},{img:z,cardTitle:"Classification of Pavements into Bleeding and Non-Bleeding using Deep Architectures: A Comparative Study",cardText:"Conducted a comparative analysis of state-of-the-art deep learning models, including VGG16, InceptionV3, EfficientNet, and ResNet50, for the classification of bleeding and non-bleeding roads. The study focused on detecting bleeding roads, a pavement distress condition caused by the upward movement of asphalt, which creates a smooth surface posing safety risks. Leveraged transfer learning techniques to fine-tune each model on a self-collected labeled dataset of road images. This research provides valuable insights into the effectiveness of deep learning models for road condition analysis, contributing to the advancement of automated road maintenance systems and enhancing road safety.",btnText:"See More",btnUrl:"https://ieeexplore.ieee.org/abstract/document/10397052"}];return Object(u.jsx)("section",{id:"publications",className:"about background-alt",children:Object(u.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{className:"section-title text-center",children:Object(u.jsx)("h2",{children:"Publications"})}),Object(u.jsx)("div",{className:"row justify-content-center",children:e.map((function(e,t){return Object(u.jsx)("div",{className:"col-md-4 d-flex justify-content-center mb-4",children:Object(u.jsxs)(I.a,{style:{width:"22rem",background:"#343a40",padding:"20px"},className:"text-center",children:[Object(u.jsx)(I.a.Img,{variant:"top",src:e.img}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsx)(I.a.Title,{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"18px"},children:e.cardTitle}),Object(u.jsx)("br",{}),Object(u.jsx)(I.a.Text,{style:{color:"#74808a"},children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e.cardText}})}),e.btnText&&Object(u.jsx)(y.a,{variant:"contained",color:"default",target:"_blank",href:e.btnUrl,children:e.btnText})]})]})},t)}))})]})})},F=i(21),V=i(121),q=i(61),J=i.n(q),R=i(59),G=i.n(R),Y=i(119),W=i(62),H=i.n(W),K=i(120),X=function(){var e=[{cardTitle:"QueryGen AI: Natural Language to SQL Generator",cardDetailedText:["Contributed to an intuitive full-stack application for automated database query generation and execution.","Created vector embeddings of tables present in database schema using Langchain, stored the results in Pinecone database.","Performed similarity search of the user\u2019s query with the generated vector embeddings to find the top 5 relevant tables.","Integrated OpenAI\u2019s language model to generate SQL/NoSQL queries by providing the model with the user\u2019s prompt along with the relevant tables."].map((function(e){return Object(u.jsx)("li",{children:e})})),technologies:["Python","SQL","GenAI","Streamlit"],links:[{url:"https://github.com/Sowmiya81/QueryGen-AI-Natural-Language-SQL-Generator",text:"View Source Code"}]},{cardTitle:"MarketMind: End-to-End Stock Price Prediction Software",cardDetailedText:["Developed an LSTM based predictive model with a Flask web interface to forecast stock prices using real-time inputs,achieving a prediction accuracy of 94%.","Optimized deployment workflows by implementing a robust CI/CD pipeline with Docker containerization and Heroku, reducing deployment time from 20s to 10s."].map((function(e){return Object(u.jsx)("li",{children:e})})),technologies:["Python","Flask","Docker","Heroku"],links:[{url:"https://github.com/Sowmiya81/MarketMind",text:"View Source Code"}]},{cardTitle:"CycleGAN-Enhanced MRI Style Transfer",cardDetailedText:["Utilized CycleGAN for MRI contrast generation, enhancing diagnostic diversity with a 30% improvement in the clarity of image conversions.","Attained a 25% increase in diagnostic accuracy by transforming T2-weighted MRI images into T1-weighted images and vice versa using advanced style transfer techniques."].map((function(e){return Object(u.jsx)("li",{children:e})})),technologies:["CycleGAN","Python","Image Processing"],links:[{url:"https://github.com/Sowmiya81/CycleGAN-Enhanced-MRI-Style-Transfer",text:"View Source Code"}]},{cardTitle:"Finance Assistant Chatbot",cardDetailedText:["Created a chatbot for Fin-tech companies for helping students regarding finances.","Tech stack comprises of Django, Rasa NLU and Postgresql."].map((function(e){return Object(u.jsx)("li",{children:e})})),technologies:["Python","Django","Rasa"],links:[{url:"https://github.com/Sitanshuk/HackPython",text:"View Source Code"}]},{cardTitle:"Text Summarization",cardDetailedText:["It summarizes the given text into number of sentences or words in English and Punjabi.","Created in Flask and deployed on Google App Engine."].map((function(e){return Object(u.jsx)("li",{children:e})})),technologies:["Python","GCP"],links:[{url:"https://github.com/bhushan-borole/text-summarization",text:"View Source Code"}]},{cardTitle:"Meeting App",cardDetailedText:"This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",technologies:["HTML","CSS","JS","PHP"],links:[{url:"https://github.com/bhushan-borole/meeting-app",text:"View Source Code"}]},{cardTitle:"Justalk",cardDetailedText:"A chat application made using React and Firebase Auth",technologies:["React JS","Firebase"],links:[{url:"https://github.com/bhushan-borole/justalk",text:"View Source Code"},{url:"https://bhushan-borole.github.io/justalk/",text:"View Demo"}]}],t=Object(n.useState)(3),i=Object(F.a)(t,2),a=i[0],c=i[1],s=Object(n.useState)(!0),r=Object(F.a)(s,2),l=r[0],o=r[1],A=Object(n.useState)(!1),d=Object(F.a)(A,2),b=d[0],h=d[1];return Object(u.jsx)("section",{id:"projects",class:"about background-alt",children:Object(u.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{children:"Projects"})}),Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(u.jsxs)(E.VerticalTimeline,{className:"custom-line",children:[e.slice(0,a).map((function(e,t){return Object(u.jsxs)(E.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},icon:Object(u.jsx)(G.a,{}),iconStyle:{background:"#0563bb",color:"#fff"},children:[Object(u.jsx)("div",{className:"projects-technologies",children:e.technologies.map((function(e,t){return Object(u.jsx)(V.a,{label:e},t)}))}),Object(u.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"12",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(u.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText}),Object(u.jsx)("div",{className:"project-links",children:e.links.map((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)(y.a,{variant:"contained",color:"default",target:"_blank",href:e.url,children:e.text})]},t)}))})]},t)})),l&&Object(u.jsx)(E.VerticalTimelineElement,{iconOnClick:function(){c(6),o(!1),h(!0)},iconClassName:"d-flex justify-content-center",icon:Object(u.jsx)(K.a,{title:"Click for more projects",arrow:!0,children:Object(u.jsx)(Y.a,{"aria-label":"add",children:Object(u.jsx)(J.a,{style:{color:"#fff",marginTop:"0.1px"}})})}),iconStyle:{background:"#0563bb",color:"#fff"}}),b&&Object(u.jsx)(E.VerticalTimelineElement,{iconOnClick:function(){c(3),o(!0),h(!1)},iconClassName:"d-flex justify-content-center",icon:Object(u.jsx)(Y.a,{"aria-label":"remove",children:Object(u.jsx)(H.a,{style:{color:"#fff",marginTop:"0.1px"}})}),iconStyle:{background:"#0563bb",color:"#fff"}})]})})})]})})},Z=i(63),_=i.n(Z),$=function(){var e=[{cardTitle:"University of California, Irvine",cardSubtitle:"Master of Data Science",coursesHead:"Courses: ",cardDetailedText:["Machine Learning","Information Retrieval and Web Search","Data Analytics","Knowledge and Data Engineering","Advanced Software Engineering","Artificial Intelligence","Text Analytics"].map((function(e){return Object(u.jsx)("li",{children:e})})),date:"2024 - 2025"},{cardTitle:"Vellore Institute Of Technology",cardSubtitle:"B.Tech in Computer Science and Engineering",cardDetailedText:"CGPA: 3.89",date:"2020 - 2024"}];return Object(u.jsx)("section",{id:"education",class:"about background-alt",children:Object(u.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{children:"Education"})}),Object(u.jsx)("div",{class:"row",children:Object(u.jsx)("div",{class:"col-lg-12 d-flex justify-content-center",children:Object(u.jsxs)(E.VerticalTimeline,{className:"custom-line",children:[e.map((function(e,t){return Object(u.jsxs)(E.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#343a40"},date:e.date,dateClassName:"timeline-date",contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(u.jsx)(j.a,{}),children:[Object(u.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"14",color:"rgba(255, 255, 255, 0.8)"},children:e.cardTitle}),Object(u.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1.2em",fontWeight:"350",color:"#7e8890",marginTop:"5px"},children:e.cardSubtitle}),Object(u.jsx)("h5",{className:"vertical-timeline-element-subtitle",style:{fontSize:"1em",fontWeight:"250",color:"#7e8890",marginTop:"5px"},children:e.coursesHead}),Object(u.jsx)("p",{style:{fontSize:"1em",fontWeight:"350",color:"#74808a"},children:e.cardDetailedText})]},t)})),Object(u.jsx)(E.VerticalTimelineElement,{iconStyle:{background:"#0563bb",color:"#fff"},icon:Object(u.jsx)(_.a,{})})]})})})]})})},ee=i.p+"static/media/aws.fe0ed479.png",te=i.p+"static/media/postman.249b7466.png",ie=function(){var e=[{img:ee,cardTitle:"AWS Certified Solutions Architect - Associate",cardText:"Issued on: <br/> December 27, 2024",btnText:"See Credential",btnUrl:"https://www.credly.com/badges/e99b394d-869a-4d71-935f-fcbff6d08078"},{img:"data:image/png;base64,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",cardTitle:"The Complete Machine Learning Course with Python",cardText:"Issued on: <br/> July 26, 2024",btnText:"See Credential",btnUrl:"https://www.udemy.com/certificate/UC-8b671ec0-4e4a-49c2-8c5b-1030e08994c1/"},{img:te,cardTitle:"Postman API Fundamentals Student Expert",cardText:"Issued on: <br/> June 30, 2024",btnText:"See Credential",btnUrl:"https://badgr.com/public/assertions/LTmfbbuOTNmvU7l5NQP6AQ?identity__email=sowmiyalakshmig@gmail.com"},{img:"data:image/png;base64,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",cardTitle:"Programming for Everybody",cardText:"Issued on: <br/> June 27, 2022",btnText:"See Credential",btnUrl:"https://www.coursera.org/account/accomplishments/verify/7G4MVFV4TRP9"}];return Object(u.jsx)("section",{id:"achievements",class:"about background-alt",children:Object(u.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{children:"Achievements"})}),Object(u.jsx)("div",{class:"row",children:e.map((function(e,t){return Object(u.jsxs)("div",{class:"col-sm-3 d-flex justify-content-center",children:[Object(u.jsxs)(I.a,{style:{width:"16rem",background:"#343a40",padding:"20px"},className:"text-center",children:[Object(u.jsx)(I.a.Img,{variant:"top",src:e.img}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsx)(I.a.Title,{style:{color:"rgba(255, 255, 255, 0.7)",fontSize:"18px"},children:e.cardTitle}),Object(u.jsx)("br",{}),Object(u.jsx)(I.a.Text,{style:{color:"#74808a"},children:Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:e.cardText}})}),e.btnText&&Object(u.jsx)(y.a,{variant:"contained",color:"default",target:"_blank",href:e.btnUrl,children:e.btnText})]})]}),Object(u.jsx)("br",{})]},t)}))})]})})},ne=function(){return Object(u.jsx)("footer",{id:"footer",children:Object(u.jsxs)("div",{class:"container",children:[Object(u.jsxs)("div",{class:"social-links",children:[Object(u.jsx)("a",{href:"https://twitter.com/bhushanborole26",class:"twitter",children:Object(u.jsx)("i",{class:"bx bxl-twitter"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/bhushan_borole_/",class:"instagram",children:Object(u.jsx)("i",{class:"bx bxl-instagram"})}),Object(u.jsx)("a",{href:"https://github.com/bhushan-borole",class:"google-plus",children:Object(u.jsx)("i",{class:"bx bxl-github"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/bhushan-borole/",class:"linkedin",children:Object(u.jsx)("i",{class:"bx bxl-linkedin"})}),Object(u.jsx)("a",{href:"mailto:borolebhushan8@gmail.com",children:Object(u.jsx)("i",{class:"bx bx-envelope"})})]}),Object(u.jsxs)("div",{class:"credits",style:{color:"#74808a"},children:["Made with ",Object(u.jsx)("span",{style:{color:"#e25555"},children:"\u2665"})," using React"]})]})})},ae=i(50),ce=i.n(ae),se=i(64),re=i(65),le=i.n(re);var oe=function(){var e=Object(n.useState)(""),t=Object(F.a)(e,2),i=t[0],a=t[1],c=Object(n.useState)(""),s=Object(F.a)(c,2),r=s[0],l=s[1],o=Object(n.useState)(!1),A=Object(F.a)(o,2),d=A[0],b=A[1],h=Object(n.useState)(!1),j=Object(F.a)(h,2),g=j[0],m=j[1],x=function(){var e=Object(se.a)(ce.a.mark((function e(t){return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.next=4,fetch("https://submit-form.com/CARCkqSD",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:r,message:i})});case 4:b(!0),l(""),a(""),setTimeout(m(!1),2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("section",{id:"contact",class:"contact section-bg",children:[Object(u.jsxs)("div",{class:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{class:"section-title",children:Object(u.jsx)("h2",{style:{fontWeight:"bold",color:"rgba(255, 255, 255, 0.8)"},children:"Get in Touch"})}),Object(u.jsx)("div",{id:"contact-form",children:Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsx)("input",{id:"email",type:"email",name:"email",placeholder:"Email",value:r,onChange:function(e){return l(e.target.value)},required:!0}),Object(u.jsx)("textarea",{id:"message",type:"text",name:"message",placeholder:"Message",value:i,onChange:function(e){return a(e.target.value)},required:!0}),Object(u.jsx)("button",{type:"submit",disabled:g,children:"Submit"})]})})]}),Object(u.jsx)(le.a,{open:d,message:"Your Message is sent!",position:"bottom-left",type:"success",yesLabel:"Ok",timeout:2e3,onYes:function(){b(!1)},closeOnClick:!0})]})},Ae=function(){return Object(u.jsxs)("main",{id:"main",children:[Object(u.jsx)(C,{}),Object(u.jsx)($,{}),Object(u.jsx)(Q,{}),Object(u.jsx)(X,{}),Object(u.jsx)(N,{}),Object(u.jsx)(U,{}),Object(u.jsx)(ie,{}),Object(u.jsx)(oe,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(ne,{})]})},de=i(66),be=i.n(de);i(96);be.a.init();var he=function(){return Object(u.jsxs)("div",{className:"App",style:{background:"rgba(46, 45, 43, 1)"},children:[Object(u.jsx)(g,{}),Object(u.jsx)(S,{}),Object(u.jsx)(Ae,{})]})},je=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,123)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),a(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(he,{})}),document.getElementById("root")),je()}},[[97,1,2]]]);
//# sourceMappingURL=main.e7442770.chunk.js.map