# Image Embed
## 📕 Brief Explanation

- Plugin helps you to view `images`, `iframes`, `PDF Files`, `excalidraw` drawings and `transclusions` directly under the Editor view without a necessity to switch to Preview mode.
- The plugin allows you to see both your `local images` and `images from internet`.
- Both `Markdown` and `Wikilinks` formats are supported as described below.
- You can resize the view of images using `ALT-TEXT` options provided below to ensure that they don't take too much place in your screen as long as it is not needed.

## 📕 Formats Supported

```markdown
FORMAT: !(ALT_TEXT)[IMAGE_PATH_OR_NAME]
SAMPLE: ![#x-small](myimage.png)
```

```markdown
FORMAT: ![[IMAGE_PATH_OR_NAME|ALT_TEXT]]
SAMPLE: ![[myimage.png|#x-small]]
```

```markdown
FORMAT: ![[IMAGE_PATH_OR_NAME]]
SAMPLE: ![[myimage.png]]
```

**Scanned Image Formats** : `jpg`, `jpeg`, `png`, `gif`, `svg`, `bmp`, `webp`

## 📕 Image View Size

Relative and Absolute Path will give you possibility to add `alt` text for the image. You can decide about the size of the image using alt texts like `#small`, `#x-small` and `#xx-small`:

```markdown
![[myImage.png|#xx-small]]
!(#x-small)[myImage.png]
```

#### New Sizing Feature:

You can now use the formats below to scale the images:

```markdown
Width x Height
![100x100](image.png)
```

```markdown
Only Width
![300](image.png)
```

# Leaflet
## Working with the plugin & example

A map can be created with a `leaflet` code block. For example:

````markdown
```leaflet
id: leaflet-map
image: [[Image.jpg]]
height: 500px
lat: 50
long: 50
minZoom: 1
maxZoom: 10
defaultZoom: 5
unit: meters
scale: 1
marker: default, 39.983334, -82.983330, [[Note]]
darkMode: true
```
````

## Options

> :pencil: Using Links
> 
> Several parameters below are for providing links to the map, whether that be for images, marker files, etc.
> 
> In all cases, either Obsidian's Wikilinks (`[[Link]]`) _or_ standard markdown links (`[Link](./path/to/file)`) may be provided.

# Next