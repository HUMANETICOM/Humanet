import React from "react";
// reactstrap components
import {
  Container,
  Col,
  Row,
  UncontrolledCarousel,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HeaderBg from "components/PageHeader/HeaderBg.js";
import Footer from "components/Footer/Footer.js";

export default function AboutUs() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <HeaderBg />
        <div className="main">
          <h1 style={headtxt}>All About Humanet</h1>
        <Container fluid={true} style={{backgroundColor: "white", marginTop: 500, position: 'absolute'}}>
          {/* Who we are and our Strategy */}
          <Container className="mb-5">
            <Row>
              <Col md="6" style={scroll}>
                <h1 style={tc}>Who we are and our Strategy</h1>
                <p style={tc}>
                Huma e Health “humaehealth.com” is the first of its kind, trusted, secured, user centered, permissioned, across-borders consortium blockchain platform for medical & health data exchange between: Identified users, accredited providers, certified partners, recognized insurers and selected bioscience and R&D partners. We are operating internationally, in several languages and currencies. Our powerful e-health passport and digital wallet “ehealthpass.com”, hold all needed health and medical information and documents required for travel and medical emergency situations. The passport QR ID “, grants our international travellers, a worldwide access to our network of accredited providers, as well to a wide range of discounted services from our approved insurers, travel, hospitality and financial partners. Huma Network virtual platform “humanet.io”, based on Web3 principals, unites seamlessly the physical and virtual health and medical services exchange, empowering every individual to be in real time control of their owned, life-long health and medical data, anywhere in the world. As an international permanent governance and management of the Huma community partnership ecosystem, we are basing our golden standards on human rights, the UN, EU, US and international laws. We are using ICD 10 diagnostic system from WHO, we are in compliance with, EU’s GDRP; USA HIPAA standards and HL7FHIR for the C-Suite standards, enhanced by the best international quality certifications. All our international providers and partners in the network are with controlled and approved credentialling. All of them are holding quality management certification and professional insurance.,
                <br/>
              HumaNet is revolutionizing the approach to health services and medical expertise exchange by using the latest developments in digital technologies. We are developing the concept of Personal Health that is the integration of users’ digital information in Preventive Health, Medical, Dental, Nutrition, Fitness and Life Style, by combining the electronic health records EHR, electronic medical record EMR, m-health, telehealth, telemedicine, wearable / portable health and medical devices. HumaNet platform is based on a blockchain principals, of a permissioned - consortium – federated networks of users, providers and business partners, allowing our stakeholders to be governed by a pre-agreed Smart Contract, where all financial transactions are trusted, transparent, traceable with secured access via a dynamic 3.0 web system and its downloadable applications (Apps) and secured anonymized & encrypted health and medical data storage in our virtual private cloud. Our private cloud-based platform, will seamlessly integrate the data collection from users, medical and dental providers, wearables, portable devices, known as Internet of medical things (IoT). Our data storage will be enhanced with big data analytics (BD), Artificial intelligence (AI), virtual reality (VR), augmented reality (AR). Our user centered blockchain technologies, empower the individual in taking ownership and control of a lifelong health and medical data collection and a real-time access to his/her own data as well as physical and virtual health exchange with the accredited stakeholder in the international ecosystem anywhere in the world.</p>
              </Col>
              <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/1200',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/1200'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/1200'
                  }
                ]}
                style={imgsize}
              />
              </Col>
            </Row>
          </Container>
          {/* Who we are and our Strategy 2nd */}
          <Container className="mt-5">
            <Row>
            <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/1200',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/1200'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/1200'
                  }
                ]}
                style={imgsize}
              />
              </Col>
              <Col md="6" style={scroll}>
                <h1 style={tc}>Our History and Our Future</h1>
                <p style={tc}>
                The Company Huma e Health, is a product and market extension merger of two companies: Universal Maritime Services “UMS”, an international medical management company that has served the shipping and the cruise industry in over 20 years; and Saemed, a biometrically accessible digital platform, with its interfaced medical record system, allowing telemedicine solutions, that in the last 25 years, support the medical needs of international seafarers and their employing shipping and cruise lines. Both UMS and SAEMED are subsidiaries of Magic Discovery Group Ltd. (MDG), a holding company with 36-year track record in international operations of Medical, Health and Wellness services to the global industries, in land, at sea and in the Air. We are internationally recognized as experts in the field of Health and Medical tourism, with an excellent reputation in serving the world's most renowned ultra-luxury brands, in the medical, wellness, shipping, travel and hospitality industries. By serving the cruise and travel industries in the last 30 years, MDG had experienced how poorly served are the global traveling populations, by the national health systems around the world. All countries are exclusively focused on meeting their own citizen’s medical need, and only when in the country. In fact, the world is experiencing an increasing unsatisfaction with national health delivery systems, as well as with the increasing out of the pocket cost for medications, health, medical and dental services. Huma e Health head office, is in the United Arab Emirates and with Representation in Switzerland, Canada and China.
                <br/>Based on MDG’ decades of expertise, and the vision of its founder Dr. SAEME, Huma e Health, the newborn of this merger, is a combination of a Health passport App. for users “ehealthpass.com” and a virtual platform of medical record and telemedicine system “humanet.io “ allowing the exchange and record of health and medical information in real time anywhere in the world. We are embracing the latest development in IT technology and extending our market to serve all travelers and all global industries in need for international healthcare services, insurance, all managed as a combined product. HumaNet is tailored to the global travelers, either for leisure or for business, Diplomats, Medical Tourists, as well as to expatriates, overseas-workers and employees of international industries. The evolution in the field of genetics, information technologies, and nanotechnology are enforcing a more individualized healthcare, often today delivered outside the government-controlled of pre and post medical services organized in the classic hospital settings. With globalization and lower cost of international travel, we have experienced an explosion of growth in Health Travel & Medical Tourism. Increasing numbers of people are crossing the globe for medical / dental care, and the phenomenon is her to stay while growing in double digit annually. At Huma e Health, we believe that building trust and confidence in an international health delivery ecosystem, will require solving the issues of health information transfer, removal of language and translation barriers, secure the quality of health services, reduce the cost and ease the co-payment with insurance providers; and that exactly what Huma e Health is about. Our aim is to empower individuals to take control of their health and medical data first, by acquiring our international personal e-health pass, that will allow them after, to decide the outcome of their own health and medical needs, by having the liberty of international choice between the accredited providers and our selected actors in the delivery system of health, medical, insurance, travel, hospitality and payment services.</p>
              </Col>
            </Row>
          </Container>
          {/* why humanet */}
          <Container className="mt-5">
            <Row>
              <Col md="6" style={scroll}>
                <h1 style={tc}>Why HumaNet:</h1>
                <p style={tc}>
                HumaNet is the first of its kind, decentralized international online, secured and trusted ecosystem. Where our identified international users are in the center of the digital exchange of data, related to preventive Health, Wellness, Medical and dental services, delivered by a network of accredited providers, preferred insurers /payors and selected partners. The dedicated exchanges between the networks are identified by nature. The user’s owned medical, dental and health data is subject to the best data anonymization and encryptions as by the international standards including GDRP; HIPAA and the best quality management requirement. Our health & medical data is aimed both for clinical use and for R&D.
                <br/><br/>
                <h2 style={tc}>Who are our users:</h2>
                <ul>
                  <li style={tc}>Health, Wellness & Medical International providers (Hospitals, Clinics, Doctors, Dentists, Specialists, Therapists, Pharmacies, Imaging Institutions, Laboratories, Telemedicine providers, Instrument providers, SPA’s, Hotels, Ambulances, Transport companies, third parties, etc...)</li>
                </ul>
                <br/>
                <h2 style={tc}>Who are our Providers:</h2>
                <ul>
                  <li style={tc}>Independent Individual users, are the international travelers’ community: (Business travelers, Expatriates, international workers, Health- Wellness and Medical tourists).</li>
                  <li style={tc}>Our corporate Individual users, are sponsored employees of Multinational companies with international activities (Airlines, Shipping lines, Energy Industry, Mining Industry, transport and logistics Industry).</li>
                </ul>
                <h2 style={tc}>Who are our Partners:</h2>
                <ul>
                  <li style={tc}>Insurance companies</li>
                  <li style={tc}>Financial institutions</li>
                  <li style={tc}>Transport & Hospitality companies</li>
                  <li style={tc}>Governments and NGOs</li>
                </ul>
                </p>
              </Col>
              <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/1200',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/1200'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/1200'
                  }
                ]}
                style={imgsize}
              />
              </Col>
            </Row>
          </Container>
          {/* Our Name & Logo */}
          <Container className="mt-5">
            <Row>
            <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/1200',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/1200'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/1200'
                  }
                ]}
                style={imgsize}
              />
              </Col>
              <Col md="6">
                <h1 style={tc}>Our Name and Logo</h1>
                <p style={tc}>
                Our platform name “Huma e Health” is the composition of the name “Huma” that represent, the bird eye view of the world and its powers of connection to the healing Ability. The prefix “Net” represents the digital network connectivity between users, providers and business partners, involved in the international health and medical ecosystem. “The Huma: is a Symbol of Holistic Medicine in the Middle Eastern Culture, History and Mythology”, An extraordinary bird, with supernatural characteristics. He is a symbol of miraculous life, enabling treatments, revival and rebirth; it was believed that those who obtained the feather of this bird could reach the greatest secrets of the universe and achieve immortality. This fantastic creature was imagined to be a huge bird of prey, it is said to have both the male and female natures in one body (Chinese Fengcheng), each nature having one wing and one leg. Huma is considered to be compassionate, and a 'bird of fortune' There are numerous folk interpretations of the name, among them that of the Sufi teacher Inayat Khan, who supposed that "in the word Huma, hu represents spirit, and the word ma originates from the Arabic 'Maʼa' ماء which means water. The Huma bird symbolizes unreachable highness in Turkish folk literature and in Ottoman poetry, the creature is often referred to as a 'bird of paradise'</p>
                </Col>
            </Row>
          </Container>
          {/* Our Mission, Vission & Corporate values */}
          <Container className="mt-5">
            <Row>
              <Col md="6" style={scroll}>
                <h1 style={tc}>Our Mission, Vission & Corporate values</h1>
                <p style={tc}>
                <strong>Our mission</strong> is to provide the international travelers and the globally operating industries and their employees, with comprehensive health and medical solutions adjusted to their needs in the geographic locations wherever they are. Our platform is using the latest IT technologies to satisfy and exceed all expectations of our users and our international network of providers and partners.
                <br/><br/>
                <strong>Our vision</strong> is to be globally recognized as the leading health and medical digital platform and management provider to the international travelers and the globally operating industries, allowing the companies and their employees to have health and medical services anywhere and any time, by using a global network of accredited medical providers and the latest telemedicine technologies based on mobile medical devices securely linked to cloud computing. Our corporate values are excellence in services, honesty, transparency, courtesy, confidentiality and respect to our customers, employees and all international travelers. These values define the way we do business, and inspire us to create a successful company building solid worldwide relationship between our users, providers and business partners.Our quality policy is to continuously develop the ultimate best IT Medical solution for our users and the globally traveling industries, striving for further improvement to ensure that we remain the leader in the industry. To ensure highest quality of our product we continually train and enhance the skills of our personnel, to guarantee they always keep up with the latest stand of development, while rendering a highly appreciated service.
                </p>
              </Col>
              <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/600',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/600'
                  }
                ]}
                style={imgsize}
              />
              </Col>
            </Row>
          </Container>
          
          {/* Our Founder */}
          <Container className="mt-5 mb-5">
            <Row>
            <Col md="6">
              <UncontrolledCarousel
                items={[
                  {
                    altText: 'Slide 1',
                    key: 1,
                    src: 'https://picsum.photos/id/123/1200/1200',
                  },
                  {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/1200'
                  },
                  {
                    altText: 'Slide 3',
                    key: 3,
                    src: 'https://picsum.photos/id/678/1200/1200'
                  }
                ]}
                style={imgsize}
              />
              </Col>
              <Col md="6" style={scroll}>
                <h1 style={tc}>Our Founder</h1>
                <p style={tc}>
                <strong>Dr. Mohammed SAEME MD. PhD.</strong> is an internationally recognized Expert on Maritime Health and Wellness Tourism. He was educated in Morocco where he became a licensed Medical Doctor in 1981 and Ph.D. in 1983. He was a Medical Practitioner in Oslo, Norway from 1983 to 1999 and continues to be a licensed MD in Norway. He started his involvement in the shipping, oil drilling and cruise industry in 1986 and worked exclusively with projects linked to Management of Medical and Wellness Clinics at sea and on land with activities in the Far East, Europe and the Americas. He served as an adviser to the United Nation organizations, the European Union, the government of Norway, Seafarer Unions, Ships Owners Associations, P&I Insurance Companies and other International Institutions involved in the Shipping and Global Medical Travel Industries. In the last 35 years, he was involved in the operation of Medical & Wellness departments of more than 90 % of the Ultra-Luxury Cruise Lines in the world. With his involvement as an Investor, Operator, Consultant, Speaker, Concessionaire and or Manager at Sea and on Land, Dr. Saeme would like to keep an active role as a responsible actor and partner in the Health, Wellness, Cruise and Medical Tourism Industries worldwide. Dr. SAEME is an entrepreneur; he manages his group of companies: Magic Discovery Group Ltd www.magicdiscovery.com as Founding Chairman & CEO. He is involved in research and development in both IT and Medical Management and uses his expertise to the service of the Medical, Travel, Shipping and other Globally active Industries. The latest of his group ongoing projects to start operating soon is Huma e health “ www.humaehealth.com” with its two subsidiaries Huma e health passport portal & App. “ www.ehealthpass.com “ and Huma Virtual Health portal & App “ www.humanet.io “
                </p>
                </Col>
            </Row>
          </Container>
        <Footer/>
        </Container>
        </div>
      </div>
    </>
  );
}

const headtxt ={
  position: 'absolute', 
  fontSize: '50px',
  fontWeight: 'bolder',
  marginTop: 200, 
  left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)'
}

const scroll={
  overflowY: 'scroll',
  width:'500px',
  float: 'left',
  height:'500px',
  position:'relative'
};

const tc={
  color: '#1f2251',
}

const imgsize={
  height: 100,
  width: 100
}