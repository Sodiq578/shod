import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Category.css';

const Category = () => {
  const { t } = useTranslation();
  const { cat } = useParams();
  const decodedCategory = cat ? decodeURIComponent(cat) : null;

  // Map translated subcategory names to their keys for matching
  const categoryKeyMap = {
    [t('categories.blanks')]: 'blanks',
    [t('categories.notepads')]: 'notepads',
    [t('categories.notePaper')]: 'notePaper',
    [t('categories.drawingPaper')]: 'drawingPaper',
    [t('categories.carbonPaper')]: 'carbonPaper',
    [t('categories.stickerPaper')]: 'stickerPaper',
    [t('categories.formatPaper')]: 'formatPaper',
    [t('categories.coloredPrinterPaper')]: 'coloredPrinterPaper',
    [t('categories.watercolor')]: 'watercolor',
    [t('categories.acrylicPaints')]: 'acrylicPaints',
    [t('categories.creativityAccessories')]: 'creativityAccessories',
    [t('categories.waxCrayons')]: 'waxCrayons',
    [t('categories.pyrography')]: 'pyrography',
    [t('categories.embroideryWeaving')]: 'embroideryWeaving',
    [t('categories.engraving')]: 'engraving',
    [t('categories.gouache')]: 'gouache',
    [t('categories.modelingBoards')]: 'modelingBoards',
    [t('categories.forComputer')]: 'forComputer',
    [t('categories.folders')]: 'folders',
    [t('categories.files')]: 'files',
    [t('categories.documentCovers')]: 'documentCovers',
    [t('categories.stationerySets')]: 'stationerySets',
    [t('categories.penHolders')]: 'penHolders',
    [t('categories.paperTrays')]: 'paperTrays',
    [t('categories.phoneAccessories')]: 'phoneAccessories',
    [t('categories.batteries')]: 'batteries',
    [t('categories.laminators')]: 'laminators',
    [t('categories.miceKeyboards')]: 'miceKeyboards',
    [t('categories.deskLamps')]: 'deskLamps',
    [t('categories.bindingMachine')]: 'bindingMachine',
    [t('categories.printersMFU')]: 'printersMFU',
    [t('categories.cutter')]: 'cutter',
    [t('categories.staplers')]: 'staplers',
    [t('categories.holePunchers')]: 'holePunchers',
    [t('categories.paperClips')]: 'paperClips',
    [t('categories.correctors')]: 'correctors',
    [t('categories.glue')]: 'glue',
    [t('categories.tape')]: 'tape',
    [t('categories.pens')]: 'pens',
    [t('categories.pencils')]: 'pencils',
    [t('categories.markers')]: 'markers',
    [t('categories.highlighters')]: 'highlighters',
    [t('categories.penRefills')]: 'penRefills',
    [t('categories.ink')]: 'ink',
    [t('categories.archiveBoxes')]: 'archiveBoxes',
    [t('categories.clipFolders')]: 'clipFolders',
    [t('categories.binders')]: 'binders',
    [t('categories.dividers')]: 'dividers',
    [t('categories.indexCards')]: 'indexCards',
    [t('categories.balls')]: 'balls',
    [t('categories.jumpRopes')]: 'jumpRopes',
    [t('categories.dumbbells')]: 'dumbbells',
    [t('categories.sportBags')]: 'sportBags',
    [t('categories.fitnessAccessories')]: 'fitnessAccessories',
    [t('categories.pencilCases')]: 'pencilCases',
    [t('categories.notebooks')]: 'notebooks',
    [t('categories.drawingAlbums')]: 'drawingAlbums',
    [t('categories.coloredPaper')]: 'coloredPaper',
    [t('categories.clay')]: 'clay',
    [t('categories.schoolBackpacks')]: 'schoolBackpacks',
    [t('categories.stampPads')]: 'stampPads',
    [t('categories.datters')]: 'datters',
    [t('categories.numberers')]: 'numberers',
    [t('categories.stampMounts')]: 'stampMounts',
  };

  // Convert decodedCategory to the corresponding key
  const normalizedCategory = categoryKeyMap[decodedCategory] || decodedCategory;

  // Filter products based on normalized category
  const categoryProducts = !normalizedCategory
    ? products // Show all products if no category is selected
    : products.filter((product) => product.category === normalizedCategory);

  return (
    <div className="category-page">
      <h2>{decodedCategory || t('allProducts')}</h2>
      {categoryProducts.length > 0 ? (
        <div className="products-grid">
          {categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p>{t('noProductsInCategory')}</p>
      )}
    </div>
  );
};

export default Category;