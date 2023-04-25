import { Component } from '@angular/core';

export interface ITitled {
  title?: string;
}

export interface ITitledFillableBox extends ITitled {
  boxes?: ITitledFillableBox[];
}


export interface ITitledFillableContainer extends ITitled {
  readonly cvPartItems?: CvPartItem[];
  readonly cvPartIcons?: CvPartIcon[];
}

export interface CvPartItem extends ITitledFillableBox {
  readonly subtitle?: string;
  readonly paragraphHeading?: string;
  readonly paragraph?: string;
  readonly listsWithText?: ListWithText[];
  readonly titlesWithText?: TitleWithText[];
}

export interface TitleWithText extends ITitled {
  readonly text: string;
}

export interface ListWithText extends ITitled {
  readonly listItems: string[];
}

export interface CvPartIcon extends ITitled {
  readonly iconSrc: string;
}

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent {

  cvParts: ITitledFillableContainer[] = [
    {
      title: $localize`:@@welcome:Welcome!`,
      cvPartItems: [{
        title: $localize`:@@localized-id-about-me:About me`,
        paragraphHeading: $localize`:@@about-me-text:I am a responsible and hardworking person. In people I appreciate justice, kindness, the desire for self-development and a positive attitude. I love nature, travel and science!`,
        paragraph: $localize`:@@about-me-tex:Since childhood, programming and exact sciences have been my passion. In many of them, I won prizes both at school and city Olympiads. The first practical application of my knowledge was the creation of various electronic devices based on microcontrollers. While studying at the Polytechnic, I had the opportunity to participate in competitions of scientific and technical creativity, where, having passed the district and regional stages, I won a prize in the Republican competitions. Over time, the hobby grew into a job, during which I happened to use many advanced programming and microelectronic technologies. Once, having accepted an offer that was interesting to me, I left my passion for a while and plunged into a new path of management with great interest. For four years, I served as an assistant to the general director in a trading and manufacturing company. Planning the work process, business correspondence, preparing meetings and conferences, setting tasks, and monitoring their implementation, have become my daily activities. In the flow of multitasking, my tourist soul was always especially pleased with the next training camp and preparation for our wonderful team building, which, with the light hand of our beloved Director, constantly took place in new and always exotic places. Having gained experience, I decided to try my hand at business and went on a free voyage. Having successfully completed one ambitious order, my short voyage was interrupted by the coronavirus pandemic. Under these conditions, having received job offers, I accepted it, deciding not to tempt fate in the coming unpredictable economic situation. After that, I had the opportunity to create an automated system for managing and controlling business processes, write software for a wide range of laboratory installations, and develop a backend for modern Internet applications.`
      }]
    },
    {
      title: $localize`:@@localized-id-work-experience:Work Experience`,
      cvPartItems: [{
        title: 'TULACO',
        subtitle: '2022 - 2023',
        paragraphHeading: $localize`:@@work-position-tulaco:Backend Developer`,
        paragraph: $localize`:@@work-description-tulaco:Developed back-end applications for hhglobal.com and stylerow.com projects. My responsibilities included writing RESTful API contracts and implementing them, creating, and changing application logic, code refactoring, writing unit tests, modifying the database, and writing stored procedures, implementing caching with Redis and fast searching with Elasticsearch, migrating from .NET Core 3.1 to .NET Core 6.0, adjusting Dockerfile and Docker Compose. Worked with C#, .NET Core 3.1 – 6.0, Entity Framework, XUnit, AutoMapper, MediatR, T-SQL, Elasticsearch, Redis, Git, Docker, DDD, Agile, Scrum, Swagger, Postman, AWS, QuickBooks, Pardot, Twilio.`
      },
      {
        title: $localize`:@@work-name-didactika:Didactika`,
        subtitle: '2020 - 2022',
        paragraphHeading: $localize`:@@work-position-didactika:Desktop Developer and System Administrator`,
        paragraph: $localize`:@@work-description-didactika:Developed desktop applications for laboratory equipment. Created a common application that integrates software for the entire range of manufactured equipment, introduced a common standard for the software being created, automated and optimized the process of creating applications. Made a migration from .net framework to .net core 3.1. Worked with technologies:C#, .NET Framework, .NET Core 3.1, Entity Framework, Git, SQL, SQLite, WPF, MVVM.`
      },
      {
        title: $localize`:@@work-name-glavmolsnab:Glavmolsnab`,
        subtitle: '2019 - 2020',
        paragraphHeading: $localize`:@@work-position-glavmolsnab-programmer:Software Developer`,
        paragraph: $localize`:@@work-description-glavmolsnab-programmer:Creation and implementation of an automated sales management system that combines enterprise servers, specialists in remote offices working on a PC, and specialists in the "fields" working from a smartphone or tablet. This software solution allows you to plan sales based on existing data, set and redirect personal tasks to employees, monitor their implementation/deadlines, calculate bonuses, and compile reports.`
      },
      {
        title: $localize`:@@work-name-frilance:Frilance`,
        subtitle: '2019 - 2019',
        paragraphHeading: $localize`:@@work-position-frilance-soft-hard-developer:Software and Hardware Developer`,
        paragraph: $localize`:@@work-description-frilance-soft-hard-developer:Implementation of projects for automation of production processes using LCD/TFT, USB, TCP/IP, http/https, Touch screen, USART, TWI, Modbus, SPI, ADC, DAC... technologies:design of circuit diagrams, design and manufacture of printed boards, software development for microcontrollers, assembly and adjustment, maintenance of the implemented equipment.`
      },
      {
        title: $localize`:@@work-name-glavmolsnab:Glavmolsnab`,
        subtitle: '2016 - 2019',
        paragraphHeading: $localize`:@@work-position-glavmolsnab-ceo-assist:CEO Assistant`,
        paragraph: $localize`:@@work-description-glavmolsnab-ceo-assist:Optimization of the work schedule, preparation for meetings and meetings, taking minutes, setting and monitoring the implementation of tasks, preliminary analysis of the documentation provided (reports, applications, schedules, plans), providing the necessary information, conducting business correspondence, assisting in the coordination and communication of business units, conducting pre-selection and interviews, fulfillment of personal assignments of the head.`
      },
      {
        title: $localize`:@@work-name-frilance:Frilance`,
        subtitle: '2012 - 2016',
        paragraphHeading: $localize`:@@work-position-frilance-microelectronics-developer:Developer of software, microcontroller systems and automation`,
        paragraph: $localize`:@@work-description-frilance:Developer of software, microcontroller systems and automation Created a system of identification by ID card and visit control. Power load remote control system, Devices for reading human physiological parameters. Designed and assembled control units for various technological processes.`
      },
      {
        title: $localize`:@@work-name-remavt:Remavt`,
        subtitle: '2010 - 2012',
        paragraphHeading: $localize`:@@work-position-remavt:Electrical Technician`,
        paragraph: $localize`:@@work-description-remavt:Maintenance of electrical equipment.`
      }]
    },
    {
      title: $localize`:@@skills:Skills`,
      cvPartItems: [{
        subtitle: 'C, C++, std, stl, C#, .Net framework, .Net Core, Entity Framework, NuGet, SQL, T-SQL, SQLite, Redis, Elasticsearch, JavaScript, TypeScript, Angular, HTML, YAML, DOM, CSS, SCSS, HTTP, RESTful, Git, SourceTree, Docker, CI/CD, VS, VS Code, Rider, Swagger, Postman, AWS, DI, WPF, WVC, MVVM, OOP, Patterns, VBA, 1C'
      }]
    },
    {
      title: $localize`:@@education:Education`,
      cvPartItems: [{
        title: $localize`:@@education-name-school:School № 42, Mogilev`,
        subtitle: '1997 - 2006',
        paragraphHeading: $localize`:@@education-achievements:Achievements:`,
        listsWithText: [{
          title: $localize`:@@education-achievements-school-school-level-title:Prize places at school Olympiads:`,
          listItems: [
            $localize`:@@education-achievements-school-school-level-math:1st place in mathematics`,
            $localize`:@@education-achievements-school-school-level-physics:1st place in physics`,
            $localize`:@@education-achievements-school-school-level-geography:1st place in geography`,
            $localize`:@@education-achievements-school-school-level-programming:2nd place in programming`,
            $localize`:@@education-achievements-school-school-level-history:3rd in history`]
        },
        {
          title: $localize`:@@education-achievements-school-city-level-title:Prize places at city Olympiads:`,
          listItems: [
            $localize`:@@education-achievements-school-city-level-programming:1st place among 9th grade students`,
            $localize`:@@education-achievements-school-city-level-mathematics:2nd place at the City mathematics Olympiad`]
        }]
      },
      {
        title: $localize`:@@education-name-college:Polytechnic College, Mogilev`,
        subtitle: '2006 - 2010',
        paragraphHeading: $localize`:@@education-achievements:Achievements:`,
        listsWithText: [{
          title: "",
          listItems: [
            $localize`:@@education-achievements-college-3rd:3rd place at the Republican competition of inventors and innovators`,
            $localize`:@@education-achievements-college-5th:5th place at the Republican competition of inventors and innovators`,
            $localize`:@@education-achievements-college-diploma:Diploma of the President for technical creativity`]
        }]
      },
      {
        title: $localize`:@@education-name-university:Belarusian Russian University, Mogilev`,
        subtitle: '2010 - 2012',
        paragraph: $localize`:@@education-achievements-text-university:Not finished, stopped studying at my own request`
      }]
    },
    {
      title: $localize`:@@interests:Interests`,
      cvPartIcons: [{
        title: $localize`:@@travel:Travel`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/2200/2200326.png'
      },
      {
        title: $localize`:@@electronics:Electronics`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/900/900618.png'
      },
      {
        title: $localize`:@@climbing:Climbing`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/3211/3211095.png'
      },
      {
        title: $localize`:@@exact-sciences:Exact sciences`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/1739/1739515.png'
      },
      {
        title: $localize`:@@snowboard:Snowboard`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/805/805501.png'
      },
      {
        title: $localize`:@@history:History`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/512/2682/2682065.png'
      },
      {
        title: $localize`:@@photography:Photography`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/128/954/954560.png'
      },
      {
        title: $localize`:@@computer-science:Computer science`,
        iconSrc: 'https://cdn-icons-png.flaticon.com/512/10306/10306099.png '
      }]
    },
  ]

}
