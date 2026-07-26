/* Sign In — form behaviour
   No backend here: this simulates a real submit flow (validation,
   loading state, success banner) so it's ready to be wired up to
   a real API endpoint later. */

(function () {
  "use strict";

  const form = document.getElementById("signinForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailHint = document.getElementById("emailHint");
  const passwordHint = document.getElementById("passwordHint");
  const submitBtn = document.getElementById("submitBtn");
  const banner = document.getElementById("formBanner");
  const toggleBtn = document.getElementById("togglePassword");
  const forgotLink = document.getElementById("forgotLink");

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, hintEl, message) {
    input.classList.add("is-invalid");
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 350);
    hintEl.textContent = message;
    hintEl.classList.add("error");
  }

  function clearError(input, hintEl) {
    input.classList.remove("is-invalid");
    hintEl.textContent = "";
    hintEl.classList.remove("error");
  }

  function showBanner(type, message) {
    banner.textContent = message;
    banner.className = "form-banner show " + type;
  }

  function validate() {
    let valid = true;

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
    } else if (passwordInput.value.length < 6) {
      setError(passwordInput, passwordHint, "Password must be at least 6 characters.");
      valid = false;
    } else {
      clearError(passwordInput, passwordHint);
    }

    return valid;
  }

  // Live-clear errors as the user types
  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", () => {
      if (input.classList.contains("is-invalid")) {
        input.value.trim()
          ? clearError(input, input === emailInput ? emailHint : passwordHint)
          : null;
      }
    });
  });

  toggleBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    toggleBtn.innerHTML = isPassword
      ? '<i class="fa fa-eye-slash"></i>'
      : '<i class="fa fa-eye"></i>';
    toggleBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
  });

  forgotLink.addEventListener("click", (e) => {
    e.preventDefault();
    showBanner("success", "If an account exists for that email, a reset link is on its way.");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    banner.classList.remove("show");

    if (!validate()) return;

    submitBtn.classList.add("is-loading");
    submitBtn.setAttribute("disabled", "true");
    submitBtn.querySelector(".btn-label").textContent = "Signing in...";

    // Simulated network request — swap for a real fetch() call to your auth API.
    setTimeout(() => {
      submitBtn.classList.remove("is-loading");
      submitBtn.removeAttribute("disabled");
      submitBtn.querySelector(".btn-label").textContent = "Sign in";
      showBanner("success", "Signed in successfully. Redirecting to your profile...");
      setTimeout(() => {
        window.location.href = "profile.html";
      }, 900);
    }, 1200);
  });
})();
