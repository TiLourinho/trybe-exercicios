from abc import ABC, abstractmethod


class PngInterface(ABC):
    @abstractmethod
    def draw(self):
        raise NotImplementedError


class PngImage(PngInterface):
    def __init__(self, png_path):
        self.png_path = png_path
        self.format = "raster"

    def draw(self):
        print(f"Drawing PNG {self.png_path} with {self.format}")


class SvgImage:
    def __init__(self, svg_path):
        self.svg_path = svg_path
        self.format = "vector"

    def get_image(self):
        return f"SVG {self.svg_path} with {self.format}"


class SvgImageDrawer(PngInterface):
    def __init__(self, svg):
        self.svg = svg

    def draw(self):
        print(f"Drawing {self.svg.get_image()}")


png_image = PngImage('python.png')
png_image.draw()

svg_image = SvgImage('python.svg')
svg_image_drawer = SvgImageDrawer(svg_image)
svg_image_drawer.draw()
