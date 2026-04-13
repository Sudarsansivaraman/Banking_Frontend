import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { LoginDto } from '../../Model/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  dto: LoginDto = { email: '', password: '' };
  loading = false;
  error = '';

  constructor(private auth: AuthService, private router: Router, private cdr: ChangeDetectorRef) {}

  onSubmit(): void {
    this.error = '';
    this.loading = true;

    this.auth.login(this.dto).subscribe({
      next: () => this.router.navigate(['/account']),
      error: err => {
        this.error = err?.error?.message ?? 'Login failed. Please try again.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
