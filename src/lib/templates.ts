export interface Template {
    name: string,
    content: string
}

export const templates: Template[] = [
    { 
      name: 'Greeting',
      content: 'Hello, {name}! Welcome to {location}.'
    },
    {
      name: 'Thank You Note',
      content: 'Dear {recipient},\n\nThank you for chossing {companyName} for your event.\nWe are looking forward to working with you!\n\nBest regards,\n{sender}'
    },
    // Add more templates as needed
  ];