# Opchains-Portfolio
I’m a Web Developer and Web3 enthusiast creating innovative websites and blockchain applications. My work blends functionality with design, delivering user-focused, high-quality digital solutions. Explore my projects to see ideas brought to life with creativity and precision.

## Contact Form Configuration
The project uses [Formspree](https://formspree.io/) for handling contact form submissions. To enable the form:

1. Create a form in Formspree (you already have one—your ID is `xojnbjle`).
2. Add an environment variable in your `.env` file:

   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xojnbjle
   ```

3. Restart the development server so Vite picks up the new variable.

The code will fallback to a placeholder endpoint if the environment variable is not set, so be sure to configure it before deploying.
