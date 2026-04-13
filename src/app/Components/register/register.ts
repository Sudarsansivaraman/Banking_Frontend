import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { RegisterDto } from '../../Model/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  dto: RegisterDto = { name: '', email: '', password: '' };
  confirmPassword = '';
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  onSubmit(): void {
    if (this.dto.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      this.cdr.detectChanges();
      return;
    }

    this.error = '';
    this.loading = true;

    this.auth.register(this.dto).subscribe({
      next: () => this.router.navigate(['/account']),
      error: err => {
        this.error = err?.error?.message ?? 'Registration failed. Please try again.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
