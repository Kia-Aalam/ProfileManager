/* Profile Detail — page behaviour
   Tab switching, live-updating the header from the Settings form,
   and a simulated save. No backend: replace the setTimeout with a
   real fetch() call when ready. */

(function () {
  "use strict";

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.querySelector('[data-panel="' + target + '"]').classList.add("active");
    });
  });

  // Edit profile button jumps straight to the Settings tab
  const editProfileBtn = document.getElementById("editProfileBtn");
  editProfileBtn.addEventListener("click", () => {
    document.querySelector('[data-tab="settings"]').click();
    document.querySelector(".profile-tabs").scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Avatar "change photo" — lets the user pick a local image to preview
  const avatarEditBtn = document.getElementById("avatarEditBtn");
  const avatarImg = document.getElementById("avatarImg");
  avatarEditBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        avatarImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
    input.click();
  });

  // Settings form: update header fields live + fake save
  const settingsForm = document.getElementById("settingsForm");
  const settingsBanner = document.getElementById("settingsBanner");
  const settingsSubmit = document.getElementById("settingsSubmit");

  const nameInput = document.getElementById("settingsName");
  const roleInput = document.getElementById("settingsRole");
  const locationInput = document.getElementById("settingsLocation");

  const profileName = document.getElementById("profileName");
  const profileRole = document.getElementById("profileRole");

  settingsForm.addEventListener("submit", function (e) {
    e.preventDefault();

    settingsSubmit.classList.add("is-loading");
    settingsSubmit.setAttribute("disabled", "true");
    settingsSubmit.querySelector(".btn-label").textContent = "Saving...";

    setTimeout(() => {
      profileName.textContent = nameInput.value.trim() || profileName.textContent;
      profileRole.textContent =
        (roleInput.value.trim() || "Web Designer") + " \u00B7 " + (locationInput.value.trim() || "");

      settingsSubmit.classList.remove("is-loading");
      settingsSubmit.removeAttribute("disabled");
      settingsSubmit.querySelector(".btn-label").textContent = "Save changes";

      settingsBanner.textContent = "Profile updated successfully.";
      settingsBanner.className = "form-banner show success";
    }, 900);
  });

  // Sign out link — simple confirm before leaving the page
  const logoutLink = document.getElementById("logoutLink");
  logoutLink.addEventListener("click", (e) => {
    const confirmed = window.confirm("Sign out of your account?");
    if (!confirmed) e.preventDefault();
  });

  // Animate the stat numbers on load
  document.querySelectorAll(".stat-strip .stat b, .stat-row .stat b").forEach((el) => {
    const raw = el.textContent.trim();
    const numMatch = raw.match(/[\d.]+/);
    if (!numMatch) return;
    const suffix = raw.replace(numMatch[0], "");
    const target = parseFloat(numMatch[0]);
    const isDecimal = numMatch[0].includes(".");
    let current = 0;
    const steps = 24;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current += increment;
      if (step >= steps) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
    }, 30);
  });
})();

