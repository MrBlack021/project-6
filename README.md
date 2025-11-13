
# Huntifyy React App to WordPress Theme Conversion Guide

This project has been restructured to work as a WordPress theme. To get it running on your WordPress site, please follow these steps carefully.

## Prerequisites

You must have [Node.js](https://nodejs.org/) and `npm` installed on your local machine to build the React application.

## Step 1: Set Up Your Project Locally

1.  **Unzip the Project:** Unzip the provided project files into a folder on your computer.
2.  **Install Dependencies:** Open a terminal or command prompt, navigate into the project folder, and run the following command to install the necessary packages for React:
    ```bash
    npm install react react-dom react-router-dom
    ```
3. You may also need development dependencies if they are not already present. For a Vite-based setup (which this environment simulates), you would typically need:
    ```bash
    npm install --save-dev vite @vitejs/plugin-react
    ```

## Step 2: Build the React Application

Now, you need to compile the React application into static HTML, CSS, and JavaScript files.

1.  **Run the Build Command:** In the same terminal, run:
    ```bash
    npx vite build
    ```
2.  **Check the Output:** This command will create a `dist` folder in your project directory. Inside `dist`, you will find an `assets` folder containing your compiled JavaScript (e.g., `index-a1b2c3d4.js`) and CSS (e.g., `index-e5f6g7h8.css`) files. These are the files WordPress will use.

## Step 3: Prepare the WordPress Theme Folder

1.  **Create a New Folder:** On your desktop or elsewhere, create a new folder. Name it `huntifyy-theme`. This will be your final theme folder.
2.  **Copy Core Theme Files:** Copy the following files from your project into the `huntifyy-theme` folder:
    *   `style.css`
    *   `index.php`
    *   `functions.php`
3.  **Create an `assets` Folder:** Inside your `huntifyy-theme` folder, create a new folder named `assets`.
4.  **Copy Built Assets:** Go back to your original project folder. Open the `dist/assets` folder and copy all the files inside it (the `.js` and `.css` files) into the `huntifyy-theme/assets` folder you just created.

## Step 4: Zip and Upload to WordPress

1.  **Create a Zip File:** Compress the entire `huntifyy-theme` folder into a zip file. It should be named `huntifyy-theme.zip`.
2.  **Go to WordPress Admin:** Log in to your WordPress dashboard.
3.  **Navigate to Themes:** Go to `Appearance` -> `Themes`.
4.  **Add New Theme:** Click the `Add New` button, and then `Upload Theme`.
5.  **Upload and Activate:** Choose your `huntifyy-theme.zip` file, upload it, and then activate it.

Your Huntifyy website should now be live on your WordPress site! Because we are using `HashRouter` in the React app, all the page navigation will work correctly without needing to configure server rewrites.

---

## Recommended WordPress Plugins & Integration

To make your site fully functional, secure, and fast, install these plugins from your WordPress dashboard (`Plugins` -> `Add New`). This theme is now pre-configured to integrate seamlessly with them.

### 1. Forms: **WPForms** (Essential)

*   **Why:** To capture and manage all submissions from your Contact and Registration forms securely in your WordPress admin panel.
*   **Integration Guide:** This theme is already coded to send form data to WPForms. You just need to create the forms and tell the theme which ones to use.

    **Step A: Create the Contact Form**
    1.  Install and activate the **WPForms** plugin.
    2.  Go to `WPForms` -> `Add New`.
    3.  Create a form named `Contact Form`.
    4.  Add three fields:
        *   `Name` (Single Line Text)
        *   `Email` (Email)
        *   `Message` (Paragraph Text)
    5.  Click `Save`. Look at the URL in your browser's address bar to find the **Form ID**. It will be a number, for example `.../wp-admin/admin.php?page=wpforms-builder&view=fields&form_id=123`. **Your Form ID is `123`**.
    6.  In the form builder, click on each field and look at the `Field Options` on the left. Note the **Field ID** for each (usually 1, 2, 3).

    **Step B: Create the Registration Form**
    1.  Go to `WPForms` -> `Add New`.
    2.  Create a form named `Registration Form`.
    3.  Add four fields: `Name`, `Email`, `Program` (Dropdown), and `Startup Idea` (Paragraph Text).
    4.  Save the form and note its **Form ID** and the **Field IDs**.

    **Step C: Update `functions.php`**
    1.  In WordPress, go to `Appearance` -> `Theme File Editor`.
    2.  Select your `Huntifyy Theme` and open the `functions.php` file.
    3.  Find the `huntifyy_handle_contact_submission` and `huntifyy_handle_register_submission` functions.
    4.  **Crucially, replace the placeholder Form IDs and Field IDs with your own.** The code comments will guide you.

### 2. SEO: **Yoast SEO** or **Rank Math** (Highly Recommended)

*   **Why:** To optimize your site for search engines like Google. Control page titles, meta descriptions, and social sharing info.
*   **How to integrate:**
    1.  Install and activate your chosen SEO plugin.
    2.  Follow the plugin's setup wizard to configure site-wide settings.
    3.  Because this is a Single Page Application (SPA), the plugin's main impact will be on how your **homepage** appears in search results. The settings you apply will affect the initial page load of your React application.

### 3. Security: **Wordfence Security** (Essential)

*   **Why:** To protect your website from malware, brute-force login attempts, and other common security threats.
*   **How to integrate:** No code changes needed. Install, activate, and follow the on-screen instructions to configure the firewall and security scans. This is a standard best practice for any WordPress site.

### 4. Caching: **W3 Total Cache** or **WP Super Cache** (Highly Recommended)

*   **Why:** To make your website load significantly faster for visitors. This improves user experience and can boost SEO rankings.
*   **How to integrate:** No code changes needed. Install, activate, and follow the plugin's recommended settings for page caching and browser caching. This will speed up the initial load time of your React app.
