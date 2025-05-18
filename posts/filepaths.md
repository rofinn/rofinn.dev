# FilePaths: File System Abstractions and Why We Need Them

Have you ever found yourself writing code that special cases different local and remote filesystems?
FilePath types are a great way to encapsulate filesystem specific logic and provide a common abstraction for interacting with various types of paths (e.g., posix, Windows, S3, FTP).
