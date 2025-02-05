import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: { text: string, completed: boolean }[] = []; // قائمة المهام
  newTask: string = ''; // المهمة الجديدة

  // إضافة مهمة جديدة
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = ''; // مسح حقل الإدخال
    }
  }

  // تبديل حالة المهمة (مكتملة/غير مكتملة)
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  // حذف مهمة
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}