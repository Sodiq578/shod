import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import './Navbar.css';
import catalogImg1 from '../images/catalog.svg';

const Navbar = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  // Define categories with translated keys
  const categories = [
    {
      name: t('categories.paperProducts'),
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
      sub: [t('categories.forComputer')],
    },
    {
      name: t('categories.officeAccessories'),
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
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
      icon: <img src={catalogImg1} alt="Catalog" className="catalog-icon" />,
      sub: [
        t('categories.stampPads'),
        t('categories.datters'),
        t('categories.numberers'),
        t('categories.stampMounts'),
      ],
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
        if (isMobile) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

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
    setMobileMenuOpen(false);
    navigate(`/category/${encodeURIComponent(categoryName)}`);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-container">
        {isMobile && (
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label={t('toggleMenuAriaLabel')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}

        <div className={`nav-items ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {categories.map((cat, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={!isMobile ? () => toggleDropdown(index) : undefined}
            >
              <div
                className="nav-main-item"
                onClick={() => {
                  if (isMobile && cat.sub.length > 0) {
                    toggleDropdown(index);
                  }
                }}
                role="button"
                aria-haspopup={cat.sub.length > 0}
                aria-expanded={openDropdown === index}
                title={cat.name}
              >
                <span className="nav-icon">{cat.icon}</span>
                <span className="nav-text">
                  {cat.name.length > 12 ? `${cat.name.slice(0, 9)}...` : cat.name}
                </span>
                {cat.sub.length > 0 && (
                  <span className="dropdown-icon">
                    {openDropdown === index ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                )}
              </div>

              {openDropdown === index && cat.sub.length > 0 && (
                <div className={`dropdown-menu ${isMobile ? 'mobile-dropdown' : ''}`}>
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
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;