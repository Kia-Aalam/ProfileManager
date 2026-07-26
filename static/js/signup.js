/* Sign Up — form behaviour
   Client-side only: validation, password strength meter, and a
   simulated submit flow. Wire the fetch() call to a real endpoint
   when a backend is available. */

(function () {
  "use strict";

  const form = document.getElementById("signupForm");
  const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirmPassword");
  const termsInput = document.getElementById("terms");

  const fullnameHint = document.getElementById("fullnameHint");
  const emailHint = document.getElementById("emailHint");
  const passwordHint = document.getElementById("passwordHint");
  const confirmHint = document.getElementById("confirmHint");

  const strengthMeter = document.getElementById("strengthMeter");
  const submitBtn = document.getElementById("submitBtn");
  const banner = document.getElementById("formBanner");
  const toggleBtn = document.getElementById("togglePassword");

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PASSWORD_HINT_DEFAULT = "Use 8+ characters with a number and a symbol.";

  function setError(input, hintEl, message) {
    input.classList.add("is-invalid");
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 350);
    hintEl.textContent = message;
    hintEl.classList.add("error");
    hintEl.classList.remove("success");
  }

  function clearError(input, hintEl, fallbackText) {
    input.classList.remove("is-invalid");
    hintEl.textContent = fallbackText || "";
    hintEl.classList.remove("error");
  }

  function showBanner(type, message) {
    banner.textContent = message;
    banner.className = "form-banner show " + type;
  }

  function passwordScore(value) {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
    return score; // 0-4
  }

  passwordInput.addEventListener("input", () => {
    const score = passwordScore(passwordInput.value);
    strengthMeter.className = "strength-meter";
    if (!passwordInput.value) return;
    if (score <= 1) strengthMeter.classList.add("weak");
    else if (score === 2) strengthMeter.classList.add("fair");
    else if (score === 3) strengthMeter.classList.add("good");
    else strengthMeter.classList.add("strong");

    if (passwordInput.classList.contains("is-invalid") && passwordInput.value.length >= 8) {
      clearError(passwordInput, passwordHint, PASSWORD_HINT_DEFAULT);
    }
  });

  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    confirmInput.type = isPassword ? "text" : "password";
    toggleBtn.innerHTML = isPassword
      ? '<i class="fa fa-eye-slash"></i>'
      : '<i class="fa fa-eye"></i>';
    toggleBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  [fullnameInput, emailInput, confirmInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim() && input.classList.contains("is-invalid")) {
        const hintMap = {
          fullname: fullnameHint,
          email: emailHint,
          confirmPassword: confirmHint,
        };
        clearError(input, hintMap[input.id]);
      }
    });
  });

  function validate() {
    let valid = true;

    if (!fullnameInput.value.trim()) {
      setError(fullnameInput, fullnameHint, "Enter your full name.");
      valid = false;
    } else {
      clearError(fullnameInput, fullnameHint);
    }

    if (!emailInput.value.trim()) {
      setError(emailInput, emailHint, "Email is required.");
      valid = false;
    } else if (!EMAIL_RE.test(emailInput.value.trim())) {
      setError(emailInput, emailHint, "Enter a valid email address.");
      valid = false;
    } else {
      clearError(emailInput, emailHint);
    }

    if (!passwordInput.value) {
      setError(passwordInput, passwordHint, "Password is required.");
      valid = false;
    } else if (passwordInput.value.length < 8) {
      setError(passwordInput, passwordHint, "Use at least 8 characters.");
      valid = false;
    } else {
      clearError(passwordInput, passwordHint, PASSWORD_HINT_DEFAULT);
    }

    if (!confirmInput.value) {
      setError(confirmInput, confirmHint, "Please confirm your password.");
      valid = false;
    } else if (confirmInput.value !== passwordInput.value) {
      setError(confirmInput, confirmHint, "Passwords do not match.");
      valid = false;
    } else {
      clearError(confirmInput, confirmHint);
    }

    if (!termsInput.checked) {
      showBanner("error", "Please accept the Terms & Privacy Policy to continue.");
      valid = false;
    }

    return valid;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    banner.classList.remove("show");

    if (!validate()) return;

    submitBtn.classList.add("is-loading");
    submitBtn.setAttribute("disabled", "true");
    submitBtn.querySelector(".btn-label").textContent = "Creating account...";

    // Simulated network request — swap for a real fetch() call to your API.
    setTimeout(() => {
      submitBtn.classList.remove("is-loading");
      submitBtn.removeAttribute("disabled");
      submitBtn.querySelector(".btn-label").textContent = "Create account";
      showBanner("success", "Account created! Redirecting you to your profile...");
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 900);
    }, 1200);
  });
})();
