```mdx
import { ArticleLayout } from '@/components/ArticleLayout'

export const article = {
  authors: 'Rory Finnegan',
  date: '2013-09-22',
  title: "Let's have some Funtoo!",
  description: 'Installing Funtoo on the Samsung Series 7 Chronos',
  format: 'blog',
}

export const metadata = {
  title: article.title,
  description: article.description,
}

export default (props) => <ArticleLayout article={article} {...props} />
mdx```

The following is a repost of some notes I made about installing Funtoo Linux in a `chroot` years ago.
While the original post is rather old, and Funtoo doesn't seem to be an actively [maintained][1] Linux distro anymore, I've been surprised by how many little nuggets I refer back to from time to time.
While closing down some old accounts I figured I'd copy that content over for future reference.

# Funtoo Experience (repost)

Since this laptop already had a working Ubuntu 12.04 installation, I figured I’d use it to install Funtoo.
Many of the installation commands can be found on Funtoo's [installation][2] page.

## Partitioning
For this, I needed a Linux live CD on which I could run `fdisk` (or something comparable to Ubuntu, which comes with `gparted`).
I used that since I already had my old Ubuntu 12.04 cd already burned.

Note: I tried using my Gentoo live USB, but I couldn’t find the USB in the bootable media bios menu.

Once running the live I created the partitions.

### Partition Schema
I intended to utilize my 10GB SSD to enhance boot speed, so I placed /boot and /root on it. However, due to size constraints and the desire to minimize writes to the SSD, I relocated /home, /tmp, /var, and /usr/portage to the HDD.

1TB HDD containing original Ubuntu install:

- /dev/sda1 - Ubuntu [200 GB] (shrink to make room for others)
- /dev/sda2 - swap [16 GB](I just reused this for both installs)
- /dev/sda3 - Extended [\~760 GB] (/usr/portage, /home, /tmp)
- /dev/sda4 - /home [\~700 GB]
- /dev/sda5 - /usr/portage [20 GB] (where the portage tree will go)
- /dev/sda6 - /tmp [20 GB]
- /dev/sda7 - /var [20 GB]

I guessed as to what the ext. part. sizes should be I might changed them later if they're wasting space.
10GB ssd, containing new Funtoo /boot and /root

- /dev/sda1 - /boot [\~500 MB]
- /dev/sda2 - /root [\~9.5 GB]

**Reboot into Ubuntu to confirm repartitioning worked**

## Make FS
I used ext4 for everything except /boot (ext2) and swap (obviously).  I just created the filesystems I when created the partitions with gparted, but you could have easily just used mkfs after fdisk/gdisk
Mount:
```bash
#!/bin/bash

mount /dev/sdb2 /mnt/funtoo
mount /dev/sdb1 /mnt/funtoo/boot
mount /dev/sda4 /mnt/funtoo/home
mount /dev/sda5 /mnt/funtoo/usr/portage
mount /dev/sda6 /mnt/funtoo/tmp
mount /dev/sda7 /mnt/funtoo/var
mount --rbind /proc /mnt/funtoo/proc
mount --rbind /dev /mnt/funtoo/dev</code></pre>
```

## Stage 3
The stage 3 tarball sets up the basic directory structure and files for your new system.
```bash
wget http://ftp.osuosl.org/pub/funtoo/funtoo-current/x86-64bit/generic_64/stage3-latest.tar.xz /mnt/funtoo
tar xJpf /mnt/funtoo/stage3-latest.tar.xz
```

## Filesystem Table

Added each of the newly created partitions to [`/etc/fstab`][3].
I always use each partitions uuid instead of `/dev/` because the uuid isn't relative to booted disk.
For options I chose to use the defaults just to clearly specify them.
The discard (performs trim) and noatime on the ssd partitions can be used to [improve ssd performance and limit writes](https://wiki.archlinux.org/index.php/Solid\_State\_Drives"].

NOTE: discard with ext2 will be mounted read only, but with /boot that's fine).

I also like to set most of my partitions to remount as read only when there are errors.

```
#UUID  mountpoint  fstype  options  flags
#/boot and / are mounted on ssd hence the discard flag
UUID=?  /boot  ext2  defaults,noatime,discard  1  2
UUID=?  /      ext4  defaults,noatime,discard,errors=remount-ro  0  1

#/home, /usr/portage, /tmp, /swap and /var are mounted on the hdd
UUID=?  /home  ext4  defaults,errors=remount-ro  0  2
UUID=?  /usr/portage  ext4  defaults,errors=remount-ro  0  1
UUID=?  /tmp  ext4  defaults,errors=remount-ro  0  1
UUID=?  /var  ext4  defaults,errors=remount-ro  0  1
UUID=?  none  swap  sw  0  0</code></pre>
```

## Choot

Now we need to chroot into our new Funtoo install.

```bash
cp /etc/resolv.conf /mnt/funtoo/etc/resolv.conf
chroot /mnt/funtoo/ /bin/bash
```

## Portage

```bash
emerge --sync
```

## Set Profile

Here is what I set for kde and such:
```bash
eselect profile list

Currently available arch profiles:
  [1]   funtoo/1.0/linux-gnu/arch/x86-64bit *
  [2]   funtoo/1.0/linux-gnu/arch/pure64
Currently available build profiles:
  [3]   funtoo/1.0/linux-gnu/build/stable
  [4]   funtoo/1.0/linux-gnu/build/current *
  [5]   funtoo/1.0/linux-gnu/build/experimental
Currently available flavor profiles:
  [6]   funtoo/1.0/linux-gnu/flavor/minimal
  [7]   funtoo/1.0/linux-gnu/flavor/core
  [8]   funtoo/1.0/linux-gnu/flavor/desktop *
  [9]   funtoo/1.0/linux-gnu/flavor/workstation
  [10]  funtoo/1.0/linux-gnu/flavor/hardened
Currently available mix-ins profiles:
  [11]  funtoo/1.0/linux-gnu/mix-ins/audio (auto)
  [12]  funtoo/1.0/linux-gnu/mix-ins/console-extras (auto)
  [13]  funtoo/1.0/linux-gnu/mix-ins/dvd (auto)
  [14]  funtoo/1.0/linux-gnu/mix-ins/gnome
  [15]  funtoo/1.0/linux-gnu/mix-ins/kde *
  [16]  funtoo/1.0/linux-gnu/mix-ins/mate
  [17]  funtoo/1.0/linux-gnu/mix-ins/media (auto)
  [18]  funtoo/1.0/linux-gnu/mix-ins/print (auto)
  [19]  funtoo/1.0/linux-gnu/mix-ins/python3-only
  [20]  funtoo/1.0/linux-gnu/mix-ins/rhel5-compat
  [21]  funtoo/1.0/linux-gnu/mix-ins/server-db
  [22]  funtoo/1.0/linux-gnu/mix-ins/server-mail
  [23]  funtoo/1.0/linux-gnu/mix-ins/server-web
  [24]  funtoo/1.0/linux-gnu/mix-ins/X (auto)
  [25]  funtoo/1.0/linux-gnu/mix-ins/xfce
  [26]  funtoo/1.0/linux-gnu/mix-ins/vmware-guest
```

For selecting flavors
```bash
eselect profile set-flavor 8
```

For selecting mix-ins
```bash
eselect profile add 15
```


## Kernel

Here is a working kernel [config][4]
```bash
echo ">sys-kernel/gentoo-sources-3.2.48" >> /etc/portage/package.mask
emerge -av genkernel
emerge -av gentoo-sources
ln -s /usr/src/linux-3.2.48-gentoo /usr/src/linux
genkernel --config=kernel-config all
```

Alright I think that's everything for now. Just run update-grub in Ubuntu to make Funtoo an option and boot into it.

## Graphics

First I recommend using my kernel [config][5],
but if you want to do it yourself checkout Gentoo's wiki [page][6] on intel graphics.

```bash
echo 'VIDEO_CARDS="intel"' >> /etc/portage/make.conf

# Update world for changes to be applied

emerge --ask --changed-use --deep @world
```
You should now have your intel graphics working


## KDE

With intel graphics set up we can start setting up Xorg and KDE. First make sure that [dbus][7] is set up correctly
(ie: it's installed and in your default run level).
Next, follow the instructions from the [Funtoo Linux First Step][8] guide for getting a basic Xorg setup working.
Note: emerging xorg will take a while, so feel free grab a coffee, read a book, or whatever.

```bash
emerge xorg-x11
mkdir -p /etc/portage
echo "x11-apps/xinit -minimal" >> /etc/portage/package.use
emerge -1N xinit
startx
```

At this point you should be able to start up a basic twm session by running that startx command.
Next, we will follow the [Gentoo KDE Wiki][9] for how to set up a basic KDE environment.
KDE also takes a while to compile, so time to crack open that book again :)

```bash
emerge --ask kdebase-meta
```
Edit `/etc/conf.d/xdm` setting `DISPLAYMANAGER="kdm"`

Add xdm to your default run level and start it with
```bash
rc-update add xdm default
/etc/init.d/xdm start
```
respectively

You should now be able to log into your desktop using kdm

## Wireless

I found I could only get my wireless to work properly by using the proprietary driver.
So I recommend you use my kernel [config][10].
To start make your /etc/modprobe.d/blacklist.conf file look like this.
This file lists modules which will not be loaded by udev, not at coldplugging and not on hotplug events.

Add your own entries to this file in the format `"blacklist [name of module]"`.
Some examples:
```
# evbug is a debug tool and should be loaded explicitly
blacklist evbug

# Autoloading eth1394 most of the time re-orders your network
# interfaces, and with buggy kernel 2.6.21, udev persistent-net
# is not able to rename these devices, so you get eth?_rename devices
# plus an exceeded 30sec boot timeout
blacklist eth1394

# You probably want this to not get the console beep loud on every tab :)
# blacklist pcspkr

# These drivers are very simple, the HID drivers are usually preferred
#blacklist usbmouse
#blacklist usbkbd

#Sometimes loading a framebuffer driver at boot gets the console black
#install pci:vdsvsdbc03sci /bin/true
blacklist b43
blacklist ssb
blacklist mac80211
blacklist bcma
blacklist brcmsmac
blacklist brcmfmac
blacklist b43legacy
blacklist bcm43xx
#blacklist wl
```

After editing your blacklist.conf it's probably easiest to just reboot or you could use the `rmmod` command.
Note: it's important to make sure that none of the blacklisted modules aren't being loaded via some dependency.
You can check this with
```bash
lsmod | grep [module name]
```

This is important cause if those modules aren't being blacklisted properly they can create race conditions with the `wl` module.
In my case it was the ssb module.

Next, install the the wl driver module
```bash
emerge -ask net-wireless/broadcom-sta
modprobe wl
```
Reboot with the `wl` module loaded and check that your wireless card is detected with

```bash
ifconfig -a
```

If everything worked and I didn't miss something you should now have a working wireless card.
To configure your wireless connection I recommend using NetworkManager
```bash
emerge -ask networkmanager
emerge -ask kde-misc/networkmanagement
/etc/init.d/NetworkManager start
rc-update add NetworkManager default
```
Now you should be able to configure your wifi connections from your kde system tray.

## That's all for now folks
Yay, we have an almost fully usable system! Now to create user accounts, tweak it, make it pretty and install apps as needed.
As always, if you found I missed something or whatever send me a message and I can add it in.
Otherwise, I'll post tweaks specific to the samsung series 7 laptop as I find them.

[1]:	https://forums.funtoo.org/topic/5185-funtoo-continues-in-hobby-mode/
[2]:	https://www.funtoo.org/Funtoo_Linux_Installation
[3]:	http://www.tuxfiles.org/linuxhelp/fstab.html%22
[4]:	https://github.com/Agrajag-Petunia/Series7GentooKernelConfig%22
[5]:	https://github.com/Agrajag-Petunia/Series7GentooKernelConfig%22
[6]:	http://wiki.gentoo.org/wiki/Intel
[7]:	http://wiki.gentoo.org/wiki/D-Bus
[8]:	http://www.funtoo.org/wiki/Funtoo_Linux_First_Steps
[9]:	http://wiki.gentoo.org/wiki/KDE
[10]:	https://github.com/Agrajag-Petunia/Series7GentooKernelConfig
