import yt_dlp
import tkinter as tk
from tkinter import filedialog

def download_video(url, save_path):
    try:
        ydl_opts = {
            'format': 'bestvideo+bestaudio/best',
            'outtmpl': f'{save_path}/%(title)s.%(ext)s',
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([url])
        print("Video downloaded successfully!")
    except Exception as e:
        print("An error occurred:", e)

def open_file_dialog():
    folder = filedialog.askdirectory()
    if folder:
        print(f"Selected folder: {folder}")
    return folder

# def list_formats(url):
#     try:
#         ydl_opts = {'listformats': True}
#         with yt_dlp.YoutubeDL(ydl_opts) as ydl:
#             ydl.extract_info(url, download=False)
#     except Exception as e:
#         print("An error occurred while listing formats:", e)

if __name__ == "__main__":
    root = tk.Tk()
    root.withdraw()

    video_url = input("Please enter a YouTube URL: ")
    save_dir = open_file_dialog()

    if save_dir:
        print("Started download...")
        # list_formats(video_url)
        download_video(video_url, save_dir)
    else:
        print("Invalid save location.")
