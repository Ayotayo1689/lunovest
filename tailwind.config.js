const plugin = require("tailwindcss/plugin");
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'var(--primary)',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			primaryDark: '#030326',
  			black: '#04042F',
  			darkBlue: '#0A0A78',
  			grey: '#3D3D49',
  			offwhite: '#F6F6FE'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [
    // require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".bg-primary-background": {
          background: "linear-gradient(to right, #0A0A78, #0F0FBD)", // Your gradient
        },
        ".text-primary-background": {
          color: "linear-gradient(to right, #0A0A78, #0F0FBD)", // Your gradient
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
