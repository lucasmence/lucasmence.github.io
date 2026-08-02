# mence.dev

Interactive terminal-style portfolio. Built with vanilla HTML/CSS/JS — no frameworks, no build step. Just serve the repo root and it works.

## Pages

| Route       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `/`         | Homepage: a fake terminal you can actually use. `whoami`, browse the virtual file system, play the `starship` mini-game and more. |
| `/projects` | Project showcase: games, web apps and references, rendered as retro windows. |
| `/resume`   | Resume with inline PDF preview (PDF.js) and a download button.              |

## Language

The site is bilingual (**English** / **Brazilian Portuguese**). Switch languages with the `lang:` switcher in the status bar, or directly via the query string:

```
?lang=en    English (default)
?lang=br    Português do Brasil
```

The language carries across pages: `projects/?lang=br`, `resume/?lang=br`, and the terminal's `whoami` content all follow the selected language.

## Terminal commands

Type `help` in the terminal on the homepage for the full list:

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `ls [-la] [path]`  | List files and directories                       |
| `cd <path>`        | Change directory (`..`, `~`, `/` supported)      |
| `pwd`              | Print working directory                          |
| `cat <file>`       | Display file content (skills, projects, contact) |
| `display <file>`   | Show an image (`display me.jpg` shows the avatar)|
| `mkdir <name>`     | Create a directory                               |
| `touch <name>`     | Create an empty file                             |
| `rm [-r] <name>`   | Remove a file (or directory with `-r`)           |
| `tree`             | Show the directory tree                          |
| `ps`               | List running "processes"                         |
| `whoami`           | About me (ASCII name, resume/projects buttons, social links) |
| `neofetch`         | System information                               |
| `echo <text>`      | Print text                                       |
| `date`             | Show current date and time                       |
| `history`          | Show command history                             |
| `git`              | Git status of the virtual working tree (`git status`, `git log`, `git init`, `git help`) — changes made with `mkdir`/`touch`/`rm` are tracked |
| `starship`         | Launch the spaceship shooter mini-game (ESC to quit) |
| `clear`            | Clear the screen                                 |
| `help`             | Show this list in the terminal                   |

## Run locally

No dependencies. Serve the repo root and open the URL:

```sh
python3 -m http.server 8000
# or: npx serve .
```

## Contact

- Email: `mence.dev@proton.me`
- GitHub: [lucasmence](https://github.com/lucasmence)
- LinkedIn: [lucasmsv96](https://www.linkedin.com/in/lucasmsv96/)
- Linktree: [lucasmence](https://linktr.ee/lucasmence)

*Developed by mence.dev*
