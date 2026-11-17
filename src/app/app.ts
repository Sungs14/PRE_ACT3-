import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { ProficiencyGroup } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Tanhueco, Jean Kyle S.';
  location = 'Angeles City, Pampanga';
  email = 'jstanhueco@student.hau.edu.ph';
  phone = '09XX XXX XXXX';

  profile =
    "I'm a student from Angeles City who enjoys building things for the web. " +
    "I'm learning TypeScript and Angular, and I like turning what I learn into small projects. " +
    "My goal is to become a front-end web developer who builds clean, responsive websites that are easy for anyone to use. " +
    "Right now I'm focusing on understanding components, data binding, and how to organize my code properly. " +
    "I also want to get comfortable with Git and GitHub so I can work with a team someday. " +
    "In the future, I hope to build full web applications that solve real problems for people in my community." +
    "Im highkey dying, need kona po ng lambing.";

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Responsive design',
    'Angular CLI',
    'Node.js and npm',
    'Git and GitHub',
    'Visual Studio Code',
    'Problem solving'
  ];

  proficiencies: ProficiencyGroup[] = [
    {
      category: 'Languages',
      items: [
        { tool: 'HTML', level: 'Intermediate' },
        { tool: 'CSS', level: 'Intermediate' },
        { tool: 'JavaScript', level: 'Beginner' },
        { tool: 'TypeScript', level: 'Beginner' }
      ]
    },
    {
      category: 'Frameworks and runtime',
      items: [
        { tool: 'Angular', level: 'Beginner' },
        { tool: 'Node.js and npm', level: 'Intermediate' }
      ]
    },
    {
      category: 'Development tools',
      items: [
        { tool: 'Visual Studio Code', level: 'Advanced' },
        { tool: 'Git and GitHub', level: 'Intermediate' },
        { tool: 'Angular CLI', level: 'Beginner' }
      ]
    }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
