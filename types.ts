import React from 'react';

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FaqItem {
  question: string;
  answer: string;
}