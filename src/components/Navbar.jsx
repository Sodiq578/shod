import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import catalogImg1 from '../images/catalog.svg';
import catalogImg2 from '../images/catalog1.svg';

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  // Kategoriyalar
  const categories = [
    {
      name: t('categories.paperProducts'),
      sub: [
        t('categories.blanks'),
        t('categories.notepads'),
        t('categories.notePaper'),
        t('categories.drawingPaper'),
        t('categories.carbonPaper'),
        t('categories.stickerPaper'),
        t('categories.formatPaper'),
        t('categories.coloredPrinterPaper'),
      ],
    },
    {
      name: t('categories.forCreativity'),
      sub: [
        t('categories.watercolor'),
        t('categories.acrylicPaints'),
        t('categories.creativityAccessories'),
        t('categories.waxCrayons'),
        t('categories.pyrography'),
        t('categories.embroideryWeaving'),
        t('categories.engraving'),
        t('categories.gouache'),
        t('categories.modelingBoards'),
      ],
    },
    {
      name: t('categories.games'),
      sub: [t('categories.forComputer')],
    },
    {
      name: t('categories.officeAccessories'),
      sub: [
        t('categories.folders'),
        t('categories.files'),
        t('categories.documentCovers'),
        t('categories.stationerySets'),
        t('categories.penHolders'),
        t('categories.paperTrays'),
      ],
    },
    {
      name: t('categories.officeEquipment'),
      sub: [
        t('categories.phoneAccessories'),
        t('categories.batteries'),
        t('categories.laminators'),
        t('categories.miceKeyboards'),
        t('categories.deskLamps'),
        t('categories.bindingMachine'),
        t('categories.printersMFU'),
        t('categories.cutter'),
      ],
    },
    {
      name: t('categories.officeSupplies'),
      sub: [
        t('categories.staplers'),
        t('categories.holePunchers'),
        t('categories.paperClips'),
        t('categories.correctors'),
        t('categories.glue'),
        t('categories.tape'),
      ],
    },
    {
      name: t('categories.writingSupplies'),
      sub: [
        t('categories.pens'),
        t('categories.pencils'),
        t('categories.markers'),
        t('categories.highlighters'),
        t('categories.penRefills'),
        t('categories.ink'),
      ],
    },
    {
      name: t('categories.archivingSystems'),
      sub: [
        t('categories.archiveBoxes'),
        t('categories.clipFolders'),
        t('categories.binders'),
        t('categories.dividers'),
        t('categories.indexCards'),
      ],
    },
    {
      name: t('categories.sportingGoods'),
      sub: [
        t('categories.balls'),
        t('categories.jumpRopes'),
        t('categories.dumbbells'),
        t('categories.sportBags'),
        t('categories.fitnessAccessories'),
      ],
    },
    {
      name: t('categories.schoolSupplies'),
      sub: [
        t('categories.pencilCases'),
        t('categories.notebooks'),
        t('categories.drawingAlbums'),
        t('categories.coloredPaper'),
        t('categories.clay'),
        t('categories.schoolBackpacks'),
      ],
    },
    {
      name: t('categories.stampProducts'),
      sub: [
        t('categories.stampPads'),
        t('categories.datters'),
        t('categories.numberers'),
        t('categories.stampMounts'),
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setOpenDropdown(null);
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-container">
        <div className="nav-items">
          {categories.map((cat, index) => {
            const icon = index % 2 === 0 ? catalogImg1 : catalogImg2;
            return (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => toggleDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div
                  className="nav-main-item"
                  onClick={() => {
                    if (cat.sub.length > 0) {
                      toggleDropdown(index);
                    } else {
                      handleCategoryClick(cat.name);
                    }
                  }}
                  role="button"
                  aria-haspopup={cat.sub.length > 0}
                  aria-expanded={openDropdown === index}
                  title={cat.name}
                >
                  <span className="nav-icon-container">
                    <img src={icon} alt="Catalog" className="catalog-icon" />
                  </span>
                  <span className="nav-text">
                    {cat.name.length > 12 ? `${cat.name.slice(0, 9)}...` : cat.name}
                  </span>
                </div>

                {openDropdown === index && cat.sub.length > 0 && (
                  <div className="dropdown-menu">
                    {cat.sub.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className={`dropdown-item ${selectedCategory === subItem ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(subItem)}
                        role="button"
                        title={subItem}
                      >
                        {subItem.length > 20 ? `${subItem.slice(0, 17)}...` : subItem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;