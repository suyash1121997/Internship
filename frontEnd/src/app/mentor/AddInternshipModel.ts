import { v4 as uuidv4 } from 'uuid';

export class AddInternshipModel {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  price: number;
  seats: number;
  requirements: string;
  mentorEmail: string;

  constructor(
    title: string,
    description: string,
    location: string,
    duration: string,
    price: number,
    seats: number,
    requirements: string,
    mentorEmail: string
  ) {
    this.id = uuidv4().substring(0, 5); // Generate UUID and take first 5 characters
    this.title = title;
    this.description = description;
    this.location = location;
    this.duration = duration;
    this.price = price;
    this.seats = seats;
    this.requirements = requirements;
    this.mentorEmail = mentorEmail;
  }
}
